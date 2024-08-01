import { Avatar } from "@/components/catalyst/avatar";
import { Button } from "@/components/catalyst/button";
import {
    Description,
    ErrorMessage,
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Text } from "@/components/catalyst/text";
import { UploadProgressBar } from "@/pages/profile/partials/UploadProgressBar";
import type { PageProps } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import React, { type ChangeEvent, type FormEventHandler } from "react";

export function UpdateUserProfileInformationForm() {
    const user = usePage<PageProps>().props.auth.user;
    const {
        data,
        setData,

        progress,
        post,
        errors,
        processing,
        recentlySuccessful,
    } = useForm<{
        first_name: string;
        last_name: string;
        email: string;
        avatar?: File | null;
    }>({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        avatar: null,
    });

    const setAvatarForUpload: FormEventHandler = (
        e: ChangeEvent<HTMLInputElement>,
    ) => {
        if (e.currentTarget.files?.[0]) {
            setData("avatar", e.currentTarget.files[0]);
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        console.log({ form: data });

        post(route("profile.update"));
    };

    return (
        <section className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
            <div>
                <Heading>Personal Information</Heading>
                <Text>Use a permanent address where you can receive mail.</Text>
            </div>

            <form onSubmit={submit} className="md:col-span-2">
                <Fieldset className="grid grid-cols-1 gap-x-6 sm:max-w-xl sm:grid-cols-6">
                    <FieldGroup className="col-span-full flex items-center gap-x-8">
                        {user.avatar && (
                            <Avatar
                                square
                                className="size-24 bg-zinc-900 text-white dark:bg-white dark:text-black"
                                alt="user avatar"
                                src={user.avatar}
                            />
                        )}
                        {!user.avatar && (
                            <Avatar
                                square
                                className="size-24 bg-zinc-900 text-white dark:bg-white dark:text-black"
                                alt="user avatar"
                                initials={user.initials}
                            />
                        )}
                        <Field className="w-full">
                            <Label htmlFor="avatar">Profile picture</Label>
                            <Input
                                type="file"
                                onChange={setAvatarForUpload}
                                autoComplete="avatar"
                            />
                            <Description>JPG, GIF or PNG. 1MB max.</Description>
                            {progress?.percentage && (
                                <UploadProgressBar
                                    value={progress.percentage}
                                />
                            )}
                            {errors.avatar && (
                                <ErrorMessage>{errors.avatar}</ErrorMessage>
                            )}
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="sm:col-span-3">
                        <Field>
                            <Label htmlFor="first_name">First name</Label>
                            <Input
                                id="first_name"
                                name="first_name"
                                type="text"
                                autoComplete="first_name"
                                value={data.first_name}
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                                required
                            />
                            {errors.first_name && (
                                <ErrorMessage>{errors.first_name}</ErrorMessage>
                            )}
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="sm:col-span-3">
                        <Field>
                            <Label htmlFor="last_name">Last name</Label>
                            <Input
                                id="last_name"
                                name="last_name"
                                type="text"
                                autoComplete="last_name"
                                value={data.last_name}
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                                required
                            />
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="col-span-full">
                        <Field>
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                        </Field>
                    </FieldGroup>
                    <div className="mt-8 flex items-center gap-4">
                        <Button type="submit" disabled={processing}>
                            Save
                        </Button>
                        <Transition
                            show={recentlySuccessful}
                            enter="transition ease-in-out"
                            enterFrom="opacity-0"
                            leave="transition ease-in-out"
                            leaveTo="opacity-0"
                        >
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                Saved.
                            </p>
                        </Transition>
                    </div>
                </Fieldset>
            </form>
        </section>
    );
}
