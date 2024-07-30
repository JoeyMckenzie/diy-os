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
import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import React, { type FormEventHandler, useRef } from "react";

export function UpdateUserPasswordForm() {
    const passwordInput = useRef<HTMLInputElement>(null);
    const currentPasswordInput = useRef<HTMLInputElement>(null);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        new_password: "",
        new_password_confirmation: "",
    });

    const updatePassword: FormEventHandler = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("new_password", "new_password_confirmation");
                    passwordInput.current?.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current?.focus();
                }
            },
        });
    };

    return (
        <section className="grid max-w-7xl grid-cols-1 gap-x-8 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
            <div>
                <Heading>Change password</Heading>
                <Text>Update your password associated with your account.</Text>
            </div>

            <form className="md:col-span-2">
                <Fieldset className="grid grid-cols-1 gap-x-6 sm:max-w-xl sm:grid-cols-6">
                    <FieldGroup className="col-span-full">
                        <Field>
                            <Label htmlFor="current_password">
                                Current password
                            </Label>
                            <Input
                                id="current_password"
                                ref={currentPasswordInput}
                                value={data.current_password}
                                onChange={(e) =>
                                    setData("current_password", e.target.value)
                                }
                                type="password"
                                autoComplete="current-password"
                            />
                            {errors.current_password && (
                                <ErrorMessage>
                                    {errors.current_password}
                                </ErrorMessage>
                            )}
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="col-span-full">
                        <Field>
                            <Label htmlFor="new_password">New Password</Label>
                            <Input
                                id="new_password"
                                ref={passwordInput}
                                value={data.new_password}
                                onChange={(e) =>
                                    setData("new_password", e.target.value)
                                }
                                type="password"
                                autoComplete="new_password"
                            />
                            {errors.new_password && (
                                <ErrorMessage>
                                    {errors.new_password}
                                </ErrorMessage>
                            )}
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="col-span-full">
                        <Field>
                            <Label htmlFor="new_password_confirmation">
                                Confirm password
                            </Label>
                            <Input
                                id="new_password_confirmation"
                                value={data.new_password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "new_password_confirmation",
                                        e.target.value,
                                    )
                                }
                                type="password"
                                autoComplete="new_password_confirmation"
                            />
                            {errors.new_password_confirmation && (
                                <ErrorMessage>
                                    {errors.new_password_confirmation}
                                </ErrorMessage>
                            )}
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
                        <p className="text-gray-600 text-sm">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
