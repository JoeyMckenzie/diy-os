import { Head } from '@inertiajs/react';
import { Heading } from '@/components/catalyst/heading';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import type { PageProps } from '@/types';

export default function Edit({ auth }: PageProps) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Materials" />
            <Heading>Materials</Heading>
        </DashboardLayout>
    );
}
