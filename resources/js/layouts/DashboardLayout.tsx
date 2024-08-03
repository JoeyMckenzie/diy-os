import type { PropsWithChildren } from 'react';
import { MobileNavbar } from '@/components/MobileNavbar';
import { SidebarMenu } from '@/components/SidebarMenu';
import { SidebarLayout } from '@/components/catalyst/sidebar-layout';
import { AppLayout } from '@/layouts/AppLayout';
import type { User } from '@/types';

export function DashboardLayout({
    children,
    user,
}: PropsWithChildren<{ user: User }>) {
    return (
        <AppLayout>
            <SidebarLayout
                navbar={<MobileNavbar user={user} />}
                sidebar={<SidebarMenu user={user} />}
            >
                {children}
            </SidebarLayout>
        </AppLayout>
    );
}
