import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Head, useForm } from '@inertiajs/react';
import { type FormEventHandler, useState } from 'react';
import { Button } from '@/components/catalyst/button';
import {
    Dialog,
    DialogActions,
    DialogDescription,
    DialogTitle,
} from '@/components/catalyst/dialog';
import { Heading } from '@/components/catalyst/heading';
import { TextLink } from '@/components/catalyst/text';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import type { Project } from '@/lib/models';
import { ProjectDetail } from '@/pages/projects/partials/ProjectDetail';
import type { PageProps } from '@/types';

export default function Show({
    auth,
    project,
}: PageProps<{ project: Project }>) {
    const [isOpen, setIsOpen] = useState(false);
    const { delete: destroy, reset } = useForm({
        projectNumber: '',
    });

    const deleteProject: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route('projects.destroy', project.id), {
            onFinish: () => reset(),
        });
    };

    return (
        <DashboardLayout user={auth.user}>
            <Head title="Projects" />
            <TextLink
                className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 no-underline dark:text-zinc-400"
                href={route('projects.index')}
            >
                <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
                {' '}
                Projects
            </TextLink>

            <div className="mt-8 flex items-center justify-between align-middle">
                <Heading className="truncate">{project.title}</Heading>
                <div className="space-x-2">
                    <Button>Edit</Button>
                    <Button color="red" onClick={() => setIsOpen(true)}>
                        Delete
                    </Button>
                </div>
            </div>

            <ProjectDetail />

            <Dialog open={isOpen} onClose={setIsOpen}>
                <form onSubmit={deleteProject}>
                    <DialogTitle>
                        Delete project
                        {project.title}
                        ?
                    </DialogTitle>
                    <DialogDescription>
                        This action cannot be undone and all associated project
                        items will also be deleted. Are you sure you want to
                        delete this project?
                    </DialogDescription>
                    <DialogActions>
                        <Button plain onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="red"
                            onClick={deleteProject}
                        >
                            Yes, delete order
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </DashboardLayout>
    );
}
