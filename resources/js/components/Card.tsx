import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
    return (
        <div className="w-full max-w-sm overflow-hidden shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">{children}</div>
        </div>
    );
}
