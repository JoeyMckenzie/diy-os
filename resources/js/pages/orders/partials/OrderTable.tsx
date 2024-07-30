import { Badge, type BadgeColor } from "@/components/catalyst/badge";
import { Checkbox } from "@/components/catalyst/checkbox";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/catalyst/table";
import type { Order, OrderStatus } from "@/lib/models";
import { useState } from "react";

export function OrderTable({ orders }: { orders: Order[] }) {
    const [allChecked, setAllChecked] = useState(false);
    const [ordersChecked, setOrdersChecked] = useState([] as Order[]);

    const getStatusBadge = (status: OrderStatus) => {
        let color: BadgeColor = "green";

        switch (status) {
            case "Draft":
                color = "cyan";
                break;
            case "Ordered":
                color = "fuchsia";
                break;
            case "Cancelled":
                color = "orange";
                break;
        }

        return <Badge color={color}>{status}</Badge>;
    };

    return (
        <Table className="[--gutter:theme(spacing.6)] sm:[--gutter:theme(spacing.8)]">
            <TableHead>
                <TableRow>
                    <TableHeader>
                        <Checkbox
                            defaultChecked={false}
                            onChange={() => setAllChecked(true)}
                        />
                    </TableHeader>
                    <TableHeader>Number</TableHeader>
                    <TableHeader>Title</TableHeader>
                    <TableHeader>Description</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader className="relative w-0">
                        <span className="sr-only">Actions</span>
                    </TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {orders.map((order) => (
                    <TableRow
                        key={order.id}
                        href={route("orders.show", order.id)}
                    >
                        <TableCell className="flex justify-center">
                            <Checkbox checked={allChecked} />
                        </TableCell>
                        <TableCell>{order.id}</TableCell>
                        <TableCell className="max-w-xs truncate font-medium">
                            {order.title}
                        </TableCell>
                        <TableCell className="max-w-xs truncate">
                            {order.description}
                        </TableCell>
                        <TableCell className="text-zinc-500">
                            {getStatusBadge(order.status)}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
