import type { LucideProps } from 'lucide-vue-next';
import { CalendarDays, Drill, FolderKanban, Home, Inbox, Logs } from 'lucide-vue-next';
import type { FunctionalComponent } from 'vue';

interface Navigation {
    primary: NavigationMenuItem[];
    tools: NavigationMenuItem[];
}

interface NavigationMenuItem {
    component: string;
    label: string;
    route: string;
    icon: FunctionalComponent<LucideProps, object, any, object>;
    badgeContents?: number;
}

export const navigationMenu: Navigation = {
    primary: [
        {
            component: 'dashboard/Index',
            label: 'Dashboard',
            icon: Home,
            route: 'dashboard',
        },
        {
            component: 'dashboard/Index',
            label: 'Notifications',
            icon: Inbox,
            route: 'dashboard',
            badgeContents: 6,
        },
    ],
    tools: [
        {
            component: 'projects/Index',
            label: 'Projects',
            icon: FolderKanban,
            route: 'projects.index',
        },
        {
            component: 'orders/Index',
            label: 'Orders',
            icon: Logs,
            route: 'orders.index',
        },
        {
            component: 'materials/Index',
            label: 'Materials',
            icon: Drill,
            route: 'materials.index',
        },
        {
            component: 'materials/Index',
            label: 'Scheduling',
            icon: CalendarDays,
            route: 'materials.index',
        },
    ],
};
