import { Button } from "@/components/catalyst/button";
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from "@/components/catalyst/dialog";
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
import { useForm } from "@inertiajs/react";
import React, { type FormEventHandler, useRef, useState } from "react";

export function DeleteUserForm() {
    const [isOpen, setIsOpen] = useState(false);
    const passwordInput = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const deleteUser: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("profile.destroy"), {
            preserveScroll: true,
            onError: () => passwordInput.current?.focus(),
            onFinish: () => reset(),
        });
    };

    const closeDialog = (open: boolean) => {
        reset();
        setIsOpen(open);
    };

    return (
        <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
            <div>
                <Heading>Delete account</Heading>
                <Text>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. This action cannot be reversed!
                </Text>
            </div>
            <div>
                <Button onClick={() => setIsOpen(true)} color="red">
                    Yes, delete my account
                </Button>
            </div>
            <Dialog open={isOpen} onClose={closeDialog}>
                <DialogTitle>
                    Are you sure you want to delete your account?
                </DialogTitle>
                <DialogDescription>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Please enter your password to
                    confirm you would like to permanently delete your account.
                </DialogDescription>
                <DialogBody>
                    <form id="delete-user-form" onSubmit={deleteUser}>
                        <Fieldset>
                            <FieldGroup>
                                <Field>
                                    <Label
                                        htmlFor="password"
                                        className="sr-only"
                                    >
                                        Password
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        ref={passwordInput}
                                        value={data.password}
                                        onChange={(e) =>
                                            setData("password", e.target.value)
                                        }
                                        placeholder="Password"
                                    />
                                    {errors.password && (
                                        <ErrorMessage>
                                            {errors.password}
                                        </ErrorMessage>
                                    )}
                                </Field>
                            </FieldGroup>
                        </Fieldset>
                    </form>
                </DialogBody>
                <DialogActions>
                    <Button onClick={() => closeDialog(false)}>Cancel</Button>
                    <Button
                        form="delete-user-form"
                        type="submit"
                        color="red"
                        className="ms-3"
                        disabled={processing}
                    >
                        Delete Account
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
