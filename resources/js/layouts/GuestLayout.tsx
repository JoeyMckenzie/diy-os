import { Logo } from "@/components/Logo";
import { Link } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            <div>
                <Link href="/">
                    <Logo className="h-24" />
                </Link>
            </div>

            <div className="mt-6">{children}</div>
        </div>
    );
}
