import { Button } from "@/components/catalyst/button";
import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { PaginatedModel, Project } from "@/lib/models";
import { NoProjectsPlaceholder } from "@/pages/projects/partials/NoProjectsPlaceholder";
import { ProjectsDisplayList } from "@/pages/projects/partials/ProjectsDisplayList";
import type { PageProps } from "@/types";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    projects,
}: PageProps<{ projects: PaginatedModel<Project> }>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Projects" />
            <div className="flex justify-between">
                <Heading>Projects</Heading>
                <Button href={route("projects.create")}>
                    Create project <PlusIcon />
                </Button>
            </div>
            {projects.data.length === 0 && <NoProjectsPlaceholder />}
            {projects.data.length > 0 && <ProjectsDisplayList />}
        </DashboardLayout>
    );
}
