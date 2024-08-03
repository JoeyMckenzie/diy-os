import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Head } from '@inertiajs/react';
import { TextLink } from '@/components/catalyst/text';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { CreateProjectForm } from '@/pages/projects/partials/CreateProjectForm';
import type { PageProps } from '@/types';

export default function Create({ auth }: PageProps) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Create project" />
            <TextLink
                className="mb-6 inline-flex items-center gap-2 text-sm/6 text-zinc-500 no-underline dark:text-zinc-400"
                href={route('projects.index')}
            >
                <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
                {' '}
                Projects
            </TextLink>
            <CreateProjectForm />
        </DashboardLayout>
    );
}
