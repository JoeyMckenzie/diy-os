import { ThemeProvider } from "@/components/ThemeProvider";
import type { PropsWithChildren } from "react";

export function AppLayout({ children }: PropsWithChildren) {
    return (
        <ThemeProvider defaultTheme="system" storageKey="diy-os-ui-theme">
            {children}
        </ThemeProvider>
    );
}
