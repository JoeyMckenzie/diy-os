import { MobileNavbar } from "@/components/MobileNavbar";
import { SidebarMenu } from "@/components/SidebarMenu";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SidebarLayout } from "@/components/catalyst/sidebar-layout";
import type { User } from "@/types";
import {
    CalendarIcon,
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import type { PropsWithChildren } from "react";

const navigation = [
    { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
    { name: "Team", href: "#", icon: UsersIcon, current: false },
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
    {
        name: "Documents",
        href: "#",
        icon: DocumentDuplicateIcon,
        current: false,
    },
    { name: "Reports", href: "#", icon: ChartPieIcon, current: false },
];
const teams = [
    { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
    { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
    { id: 3, name: "Workcation", href: "#", initial: "W", current: false },
];
const userNavigation = [
    { name: "Your profile", href: "#" },
    { name: "Sign out", href: "#" },
];

export function DashboardLayout({
    children,
    user,
}: PropsWithChildren<{ user: User }>) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <SidebarLayout
                navbar={<MobileNavbar initials={user.initials} />}
                sidebar={<SidebarMenu user={user} />}
            >
                {children}
            </SidebarLayout>
        </ThemeProvider>
    );
}
