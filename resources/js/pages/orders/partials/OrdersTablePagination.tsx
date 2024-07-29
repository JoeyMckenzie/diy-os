import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
} from "@/components/catalyst/pagination";
import type { Order, PaginatedModel } from "@/lib/models";

export function OrdersTablePagination({
    ordersMetadata,
}: { ordersMetadata: Omit<PaginatedModel<Order>, "data"> }) {
    return (
        <Pagination className="mt-6">
            <PaginationPrevious href="?page=2" />
            <PaginationList>
                <PaginationPage href="?page=1">1</PaginationPage>
                <PaginationPage href="?page=2">2</PaginationPage>
                <PaginationPage href="?page=3" current>
                    3
                </PaginationPage>
                <PaginationPage href="?page=4">4</PaginationPage>
                <PaginationGap />
                <PaginationPage href="?page=65">65</PaginationPage>
                <PaginationPage href="?page=66">66</PaginationPage>
            </PaginationList>
            <PaginationNext href="?page=4" />
        </Pagination>
    );
}
