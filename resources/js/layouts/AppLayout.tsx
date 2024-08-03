import type { PropsWithChildren } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="diy-os-ui-theme">
            {children}
        </ThemeProvider>
    );
}
