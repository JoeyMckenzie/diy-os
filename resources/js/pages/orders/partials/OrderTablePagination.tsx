import {
    Pagination,
    PaginationGap,
    PaginationList,
    PaginationNext,
    PaginationPage,
    PaginationPrevious,
} from "@/components/catalyst/pagination";
import type { Order, PaginatedModel } from "@/lib/models";

export function OrderTablePagination({
    orders,
}: { orders: Omit<PaginatedModel<Order>, "data"> }) {
    const previousPage =
        orders.current_page === 1 ? 1 : orders.current_page - 1;
    const nextPage =
        orders.current_page === orders.last_page
            ? orders.last_page
            : orders.current_page + 1;
    const nextPageAvailable =
        orders.current_page < orders.last_page &&
        orders.current_page + 1 !== orders.last_page;
    const previousPageAvailable = orders.current_page > 1;
    const displayPreviousPagesGap = previousPage > 2;
    const displayNextPagesGap = orders.last_page - nextPage > 1;

    return (
        <Pagination className="mt-6">
            <PaginationPrevious
                preserveScroll
                href={route("orders.index", {
                    page: previousPage,
                })}
            />
            <PaginationList>
                {orders.current_page !== 1 && orders.current_page !== 2 && (
                    <PaginationPage
                        href={route("orders.index", {
                            page: 1,
                        })}
                    >
                        1
                    </PaginationPage>
                )}
                {displayPreviousPagesGap && <PaginationGap />}
                {previousPageAvailable && (
                    <PaginationPage
                        href={route("orders.index", {
                            page: previousPage,
                        })}
                    >
                        {previousPage}
                    </PaginationPage>
                )}
                <PaginationPage
                    current
                    href={route("orders.index", {
                        page: orders.current_page,
                    })}
                >
                    {orders.current_page}
                </PaginationPage>
                {nextPageAvailable && (
                    <PaginationPage
                        href={route("orders.index", {
                            page: nextPage,
                        })}
                    >
                        {nextPage}
                    </PaginationPage>
                )}
                {displayNextPagesGap && <PaginationGap />}
                {orders.current_page !== orders.last_page && (
                    <PaginationPage
                        href={route("orders.index", {
                            page: orders.last_page,
                        })}
                    >
                        {orders.last_page}
                    </PaginationPage>
                )}
            </PaginationList>
            <PaginationNext
                preserveScroll
                href={route("orders.index", {
                    page: nextPage,
                })}
            />
        </Pagination>
    );
}
