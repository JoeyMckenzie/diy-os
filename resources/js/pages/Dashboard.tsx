import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { PaginatedModel, Todo } from "@/lib/models";
import type { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Dashboard({
    auth,
    todos,
    metadata,
}: PageProps<{
    todos: PaginatedModel<Todo>;
    total: number;
    metadata: { completed: number; inProgress: number; notStarted: number };
}>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Dashboard" />
            <Heading>Welcome {auth.user.name}!</Heading>
        </DashboardLayout>
    );
}
