import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { PaginatedModel, Project } from "@/lib/models";
import { NoProjectsPlaceholder } from "@/pages/projects/partials/NoProjectsPlaceholder";
import type { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    projects,
}: PageProps<{ projects: PaginatedModel<Project> }>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Projects" />
            <Heading>Projects</Heading>
            {projects.data.length !== 0 && <NoProjectsPlaceholder />}
        </DashboardLayout>
    );
}
