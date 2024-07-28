import { Button } from "@/components/catalyst/button";
import {
    ErrorMessage,
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import GuestLayout from "@/layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { type FormEventHandler, useEffect } from "react";

export default function ResetPassword({
    token,
    email,
}: { token: string; email: string }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, [reset]);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <Head title="Reset Password" />

            <form onSubmit={submit}>
                <Fieldset>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            {errors.email && (
                                <ErrorMessage>{errors.email}</ErrorMessage>
                            )}
                        </Field>
                        <Field>
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                            {errors.password && (
                                <ErrorMessage>{errors.password}</ErrorMessage>
                            )}
                        </Field>
                        <Field>
                            <Label htmlFor="password_confirmation">
                                Confirm Password
                            </Label>

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                            />
                            {errors.password_confirmation && (
                                <ErrorMessage>
                                    {errors.password_confirmation}
                                </ErrorMessage>
                            )}
                        </Field>
                        <div className="mt-4 flex items-center justify-end">
                            <Button className="ms-4" disabled={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </FieldGroup>
                </Fieldset>
            </form>
        </GuestLayout>
    );
}
