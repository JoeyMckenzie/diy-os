import { Button } from "@/components/catalyst/button";
import {
    Dialog,
    DialogActions,
    DialogDescription,
    DialogTitle,
} from "@/components/catalyst/dialog";
import { Heading } from "@/components/catalyst/heading";
import { TextLink } from "@/components/catalyst/text";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import type { Order } from "@/lib/models";
import { OrderDetail } from "@/pages/orders/partials/OrderDetail";
import type { PageProps } from "@/types";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { Head, useForm } from "@inertiajs/react";
import { type FormEventHandler, useState } from "react";

export default function Show({
    auth,
    order,
    orderId,
}: PageProps<{ orderId: number; order: Order }>) {
    const [isOpen, setIsOpen] = useState(false);
    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        orderNumber: "",
    });

    const deleteOrder: FormEventHandler = (e) => {
        e.preventDefault();

        destroy(route("orders.destroy", order.id), {
            onFinish: () => reset(),
        });
    };

    return (
        <DashboardLayout user={auth.user}>
            <Head title={`Order ${order.order_number}`} />
            <TextLink
                className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 no-underline dark:text-zinc-400"
                href={route("orders.index")}
            >
                <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />{" "}
                Orders
            </TextLink>
            <div className="mt-8 flex items-center justify-between align-middle">
                <Heading>Order {order.order_number}</Heading>
                <div className="space-x-2">
                    <Button>Edit</Button>
                    <Button color="red" onClick={() => setIsOpen(true)}>
                        Delete
                    </Button>
                </div>
            </div>
            <OrderDetail order={order} />

            <Dialog open={isOpen} onClose={setIsOpen}>
                <form onSubmit={deleteOrder}>
                    <DialogTitle>Delete order #{order.id}?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone and all associated order
                        items will also be deleted. Are you sure you want to
                        delete this order?
                    </DialogDescription>
                    <DialogActions>
                        <Button plain onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit" color="red" onClick={deleteOrder}>
                            Yes, delete order
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </DashboardLayout>
    );
}
