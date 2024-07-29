import { Button } from "@/components/catalyst/button";
import { Heading } from "@/components/catalyst/heading";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { Order, PaginatedModel } from "@/lib/models";
import { OrdersTable } from "@/pages/orders/partials/OrdersTable";
import { OrdersTablePagination } from "@/pages/orders/partials/OrdersTablePagination";
import type { PageProps } from "@/types";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Head } from "@inertiajs/react";

export default function Index({
    auth,
    orders,
}: PageProps<{ orders: PaginatedModel<Order> }>) {
    const ordersMetadata: Omit<PaginatedModel<Order>, "data"> = Object;

    return (
        <DashboardLayout user={auth.user}>
            <Head title="Orders" />
            <div className="flex justify-between">
                <Heading>Orders</Heading>
                <Button>
                    Create order <PlusIcon />
                </Button>
            </div>
            <div className="pt-8">
                <OrdersTable orders={orders.data} />
                <OrdersTablePagination ordersMetadata={ordersMetadata} />
            </div>
        </DashboardLayout>
    );
}
