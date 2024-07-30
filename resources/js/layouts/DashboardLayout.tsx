import { MobileNavbar } from "@/components/MobileNavbar";
import { SidebarMenu } from "@/components/SidebarMenu";
import { SidebarLayout } from "@/components/catalyst/sidebar-layout";
import { AppLayout } from "@/layouts/AppLayout";
import type { User } from "@/types";
import type { PropsWithChildren } from "react";

export function DashboardLayout({
    children,
    user,
}: PropsWithChildren<{ user: User }>) {
    return (
        <AppLayout>
            <SidebarLayout
                navbar={<MobileNavbar initials={user.initials} />}
                sidebar={<SidebarMenu user={user} />}
            >
                {children}
            </SidebarLayout>
        </AppLayout>
    );
}
