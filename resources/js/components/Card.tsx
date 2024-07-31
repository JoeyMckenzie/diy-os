import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
    return (
        <div className="w-full max-w-md overflow-hidden border border-1 border-zinc-200 bg-zinc-50 sm:rounded-lg dark:border-zinc-800 dark:bg-zinc-900">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    );
}
