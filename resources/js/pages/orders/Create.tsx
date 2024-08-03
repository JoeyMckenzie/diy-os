import { ChevronLeftIcon } from '@heroicons/react/20/solid';
import { Head } from '@inertiajs/react';
import { TextLink } from '@/components/catalyst/text';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import type { Order } from '@/lib/models';
import { CreateOrderForm } from '@/pages/orders/partials/CreateOrderForm';
import type { PageProps } from '@/types';

export default function Show({
    auth,
    order,
    orderId,
}: PageProps<{ orderId: number; order: Order }>) {
    return (
        <DashboardLayout user={auth.user}>
            <Head title="Create order" />
            <TextLink
                className="mb-12 inline-flex items-center gap-2 text-sm/6 text-zinc-500 no-underline dark:text-zinc-400"
                href={route('orders.index')}
            >
                <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
                {' '}
                Orders
            </TextLink>
            <CreateOrderForm />
        </DashboardLayout>
    );
}
