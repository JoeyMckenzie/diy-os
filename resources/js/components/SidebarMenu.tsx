import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { UserProfileDropdown } from "@/components/UserProfileDropdown";
import {
    Sidebar,
    SidebarBody,
    SidebarFooter,
    SidebarHeader,
    SidebarHeading,
    SidebarItem,
    SidebarLabel,
    SidebarSection,
    SidebarSpacer,
} from "@/components/catalyst/sidebar";
import type { User } from "@/types";
import { MoonIcon } from "@heroicons/react/16/solid";
import {
    Cog6ToothIcon,
    FolderIcon,
    HomeIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    SunIcon,
    TicketIcon,
    WrenchIcon,
} from "@heroicons/react/20/solid";

export function SidebarMenu({ user }: { user: User }) {
    const { setTheme, theme } = useTheme();
    const displayTheme =
        theme.charAt(0).toUpperCase() + theme.slice(1).toLowerCase();
    const toggleTheme = () => {
        if (theme === "light" || theme === "system") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };

    return (
        <Sidebar>
            <SidebarHeader>
                <Logo className={"w-36"} />
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection>
                    <SidebarItem href={route("dashboard")}>
                        <HomeIcon />
                        <SidebarLabel>Home</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href={route("projects.index")}>
                        <FolderIcon />
                        <SidebarLabel>Projects</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/orders">
                        <TicketIcon />
                        <SidebarLabel>Orders</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/materials">
                        <WrenchIcon />
                        <SidebarLabel>Materials</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/settings">
                        <Cog6ToothIcon />
                        <SidebarLabel>Settings</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
                <SidebarSection className="max-lg:hidden">
                    <SidebarHeading>Upcoming Events</SidebarHeading>
                    <SidebarItem href="/events/1">
                        Bear Hug: Live in Concert
                    </SidebarItem>
                    <SidebarItem href="/events/2">Viking People</SidebarItem>
                    <SidebarItem href="/events/3">
                        Six Fingers — DJ Set
                    </SidebarItem>
                    <SidebarItem href="/events/4">
                        We All Look The Same
                    </SidebarItem>
                </SidebarSection>
                <SidebarSpacer />
                <SidebarSection>
                    <SidebarItem onClick={toggleTheme}>
                        {theme === "light" && <SunIcon />}
                        {theme === "dark" && <MoonIcon />}
                        <SidebarLabel>{displayTheme}</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/support">
                        <QuestionMarkCircleIcon />
                        <SidebarLabel>Support</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/changelog">
                        <SparklesIcon />
                        <SidebarLabel>Changelog</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarBody>
            <SidebarFooter className="max-lg:hidden">
                <UserProfileDropdown user={user} />
            </SidebarFooter>
        </Sidebar>
    );
}
