import { ThemeToggle } from "@/components/ThemeToggle";
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
import { Head, Link, useForm } from "@inertiajs/react";
import { type FormEventHandler, useEffect } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // biome-ignore lint/correctness/useExhaustiveDependencies: reset only used on mount
    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout title="Sign up for diyOS">
            <Head title="Register" />

            <form onSubmit={submit}>
                <Fieldset>
                    <FieldGroup>
                        <div className="grid grid-cols-1 gap-x-6 sm:max-w-xl sm:grid-cols-6">
                            <Field className="sm:col-span-3">
                                <Label htmlFor="first_name">First Name</Label>
                                <Input
                                    id="first_name"
                                    name="first_name"
                                    value={data.first_name}
                                    autoComplete="first_name"
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                    required
                                />
                                {errors.first_name && (
                                    <ErrorMessage>
                                        {errors.first_name}
                                    </ErrorMessage>
                                )}
                            </Field>
                            <Field className="sm:col-span-3">
                                <Label htmlFor="last_name">Last Name</Label>
                                <Input
                                    id="last_name"
                                    name="last_name"
                                    value={data.last_name}
                                    autoComplete="last_name"
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    required
                                />
                                {errors.last_name && (
                                    <ErrorMessage>
                                        {errors.last_name}
                                    </ErrorMessage>
                                )}
                            </Field>
                        </div>
                        <Field>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="john.smith@example.com"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
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
                                required
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
                                id="password_confirmation"
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
                                required
                            />
                            {errors.password_confirmation && (
                                <ErrorMessage>
                                    {errors.password_confirmation}
                                </ErrorMessage>
                            )}
                        </Field>
                        <Button
                            type="submit"
                            className="w-full"
                            disabled={processing}
                        >
                            Sign up
                        </Button>
                    </FieldGroup>
                    <div className="mt-4 flex items-center justify-between">
                        <Link
                            href={route("login")}
                            className="text-sm underline dark:text-white"
                        >
                            Have an account?
                        </Link>
                        <ThemeToggle />
                    </div>
                </Fieldset>
            </form>
        </GuestLayout>
    );
}
