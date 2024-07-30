import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
    return (
        <div className="w-full max-w-md overflow-hidden border border-1 border-neutral-200 bg-neutral-50 sm:rounded-lg dark:border-neutral-800 dark:bg-neutral-900">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    );
}
