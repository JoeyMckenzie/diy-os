import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import { EditUserForm } from "@/pages/profile/partials/EditUserForm";
import type { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Profile" />

            <Heading className="sr-only">Account Settings</Heading>

            <EditUserForm />

            {/*
            <div className="py-12">
                <div className="mx-auto max-w-7xl space-y-6 lg:px-8 sm:px-6">
                    <div className="p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateAvatarForm
                            initials={auth.user.initials}
                            avatar={auth.user.avatar}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdateProfileInformation
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 shadow sm:rounded-lg sm:p-8">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
            */}
        </DashboardLayout>
    );
}
