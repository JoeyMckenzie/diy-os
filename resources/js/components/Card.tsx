import type { PropsWithChildren } from 'react';

export function Card({ children }: PropsWithChildren) {
    return (
        <div className="border-1 w-full max-w-md overflow-hidden border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    );
}
