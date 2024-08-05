import { Drill, Home, Logs } from 'lucide-vue-next';

export const menu = [
    {
        component: 'projects/Index',
        label: 'Projects',
        icon: Home,
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
];
