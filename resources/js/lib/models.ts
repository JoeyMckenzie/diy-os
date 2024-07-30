export interface PaginatedModel<T> {
    current_page: number;
    data: T[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: PaginationLink[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url?: string;
    to: number;
    total: number;
}

export interface PaginationLink {
    url?: string;
    label: string;
    active: boolean;
}

export interface Todo {
    id: number;
    name: string;
    status: TodoStatus;
    title: string;
    due_by: string;
}

export interface Order {
    id: string;
    order_number: string;
    title: string;
    description: string;
    status: OrderStatus;
}

export interface Project {
    id: string;
    title: string;
    description: string;
}

export type TodoStatus = "Done" | "In Progress" | "Overdue" | "Not Started";

export type OrderStatus = "Draft" | "Ordered" | "Completed" | "Cancelled";

export type PaginatedTodos = PaginatedModel<Todo>;
