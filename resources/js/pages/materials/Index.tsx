import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Edit({ auth }: PageProps) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Materials" />
            <Heading>Materials</Heading>
        </DashboardLayout>
    );
}
