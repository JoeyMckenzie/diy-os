import type { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    initials: string;
    avatar_url?: string | null;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
    errors?: Record<string, string>;
};
