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
        </DashboardLayout>
    );
}
