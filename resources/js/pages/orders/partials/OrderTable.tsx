import { Badge, type BadgeColor } from "@/components/catalyst/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/catalyst/table";
import type { Order, OrderStatus } from "@/lib/models";

export function OrderTable({ orders }: { orders: Order[] }) {
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
