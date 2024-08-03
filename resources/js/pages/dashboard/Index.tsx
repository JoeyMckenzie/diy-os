import { Head } from '@inertiajs/react';
import { Divider } from '@/components/catalyst/divider';
import { Heading } from '@/components/catalyst/heading';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { DashboardStats } from '@/pages/dashboard/partials/DashboardStats';
import type { PageProps } from '@/types';

export default function Dashboard({
    auth,
    metadata,
}: PageProps<{
    total: number;
    metadata: { completed: number; inProgress: number; notStarted: number };
}>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Dashboard" />
            <Heading>
                Welcome
                {auth.user.name}
                !
            </Heading>
            <DashboardStats />
            <Divider className="my-6" />
        </DashboardLayout>
    );
}
