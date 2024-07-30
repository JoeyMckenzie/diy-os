import { Card } from "@/components/Card";
import { Logo } from "@/components/Logo";
import { Heading } from "@/components/catalyst/heading";
import { AppLayout } from "@/layouts/AppLayout";
import { Link } from "@inertiajs/react";
import type { PropsWithChildren } from "react";

export default function Guest({
    children,
    title = null,
}: PropsWithChildren<{ title?: string | null }>) {
    return (
        <AppLayout>
            <div className="flex min-h-screen w-full flex-col items-center pt-6 sm:justify-center dark:bg-neutral-950 sm:pt-0">
                <div>
                    <Link href="/">
                        <Logo className="h-12" />
                    </Link>
                </div>

                {title && <Heading className="py-6">{title}</Heading>}

                <Card>{children}</Card>
            </div>
        </AppLayout>
    );
}
