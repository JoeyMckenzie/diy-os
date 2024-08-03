import { PlusIcon } from '@heroicons/react/20/solid';
import { Head } from '@inertiajs/react';
import { Button } from '@/components/catalyst/button';
import { Heading } from '@/components/catalyst/heading';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import type { Order, PaginatedModel } from '@/lib/models';
import { omit } from '@/lib/utils';
import { OrderTable } from '@/pages/orders/partials/OrderTable';
import { OrderTablePagination } from '@/pages/orders/partials/OrderTablePagination';
import type { PageProps } from '@/types';

export default function Index({
    auth,
    orders,
}: PageProps<{ orders: PaginatedModel<Order> }>) {
    const ordersMetadata = omit(orders, ['data']);

    return (
        <DashboardLayout user={auth.user}>
            <Head title="Orders" />
            <div className="flex justify-between">
                <Heading>Orders</Heading>
                <Button href={route('orders.create')}>
                    Create order
                    {' '}
                    <PlusIcon />
                </Button>
            </div>
            <div className="pt-8">
                <OrderTable orders={orders.data} />
                <OrderTablePagination orders={ordersMetadata} />
            </div>
        </DashboardLayout>
    );
}
