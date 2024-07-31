import { Avatar } from "@/components/catalyst/avatar";
import { Button } from "@/components/catalyst/button";
import {
    ErrorMessage,
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Text } from "@/components/catalyst/text";
import type { PageProps } from "@/types";
import { Transition } from "@headlessui/react";
import { useForm, usePage } from "@inertiajs/react";
import React, { type FormEventHandler } from "react";

export function UpdateUserProfileInformationForm() {
    const user = usePage<PageProps>().props.auth.user;
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
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
                        <Avatar
                            square
                            className="size-24 bg-zinc-900 text-white dark:bg-white dark:text-black"
                            initials={user.initials}
                            alt=""
                            // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                        <div>
                            <Button>Change avatar</Button>
                            <p className="mt-2 text-gray-400 text-xs leading-5">
                                JPG, GIF or PNG. 1MB max.
                            </p>
                        </div>
                    </FieldGroup>
                    <FieldGroup className="sm:col-span-3">
                        <Field>
                            <Label htmlFor="first-name">First name</Label>
                            <Input
                                id="first-name"
                                name="first-name"
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
                            <Label htmlFor="last-name">Last name</Label>
                            <Input
                                id="last-name"
                                name="last-name"
                                type="text"
                                autoComplete="family-name"
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
                            />
                        </Field>
                    </FieldGroup>
                </Fieldset>

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
                        <Text>Saved.</Text>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
