import { Button } from "@/components/catalyst/button";
import {
    Dialog,
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
import { clsx } from "clsx";
import { type FormEventHandler, useRef, useState } from "react";

export default function DeleteUserForm({
    className = "",
}: { className?: string }) {
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
        <section className={clsx("space-y-6", className)}>
            <header className="mb-6">
                <Heading>Delete Accounts</Heading>
                <Text>
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </Text>
            </header>
            <Button color="red" onClick={() => setIsOpen(true)}>
                Delete Account
            </Button>
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
                    <form onSubmit={deleteUser}>
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
                                <Button onClick={() => closeDialog(false)}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    color="red"
                                    className="ms-3"
                                    disabled={processing}
                                >
                                    Delete Account
                                </Button>
                            </FieldGroup>
                        </Fieldset>
                    </form>
                </DialogBody>
            </Dialog>
        </section>
    );
}
