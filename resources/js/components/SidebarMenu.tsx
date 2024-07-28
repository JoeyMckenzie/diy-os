import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { Avatar } from "@/components/catalyst/avatar";
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from "@/components/catalyst/dropdown";
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
import {
    ArrowRightStartOnRectangleIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    MoonIcon,
    ShieldCheckIcon,
    UserIcon,
} from "@heroicons/react/16/solid";
import {
    InboxIcon,
    MagnifyingGlassIcon,
    MegaphoneIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    Square2StackIcon,
    SunIcon,
    TicketIcon,
} from "@heroicons/react/20/solid";
import { Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

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
                <SidebarSection className="max-lg:hidden">
                    <SidebarItem href="/search">
                        <MagnifyingGlassIcon />
                        <SidebarLabel>Search</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/inbox">
                        <InboxIcon />
                        <SidebarLabel>Inbox</SidebarLabel>
                    </SidebarItem>
                </SidebarSection>
            </SidebarHeader>
            <SidebarBody>
                <SidebarSection>
                    <SidebarItem href="/">
                        <HomeIcon />
                        <SidebarLabel>Home</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/events">
                        <Square2StackIcon />
                        <SidebarLabel>Events</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/orders">
                        <TicketIcon />
                        <SidebarLabel>Orders</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/settings">
                        <Cog6ToothIcon />
                        <SidebarLabel>Settings</SidebarLabel>
                    </SidebarItem>
                    <SidebarItem href="/broadcasts">
                        <MegaphoneIcon />
                        <SidebarLabel>Broadcasts</SidebarLabel>
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
                <Dropdown>
                    <DropdownButton as={SidebarItem}>
                        <span className="flex min-w-0 items-center gap-3">
                            <Avatar
                                initials={user.initials}
                                className="size-10"
                                square
                                alt=""
                            />
                            <span className="min-w-0">
                                <span className="block truncate font-medium text-sm/5 text-zinc-950 dark:text-white">
                                    {user.name}
                                </span>
                                <span className="block truncate font-normal text-xs/5 text-zinc-500 dark:text-zinc-400">
                                    {user.email}
                                </span>
                            </span>
                        </span>
                        <ChevronUpIcon />
                    </DropdownButton>
                    <DropdownMenu className="min-w-64" anchor="top start">
                        <DropdownItem href={route("profile.edit")}>
                            <UserIcon />
                            <DropdownLabel>My profile</DropdownLabel>
                        </DropdownItem>
                        <DropdownItem href="/settings">
                            <Cog8ToothIcon />
                            <DropdownLabel>Settings</DropdownLabel>
                        </DropdownItem>
                        <DropdownDivider />
                        <DropdownItem href="/privacy-policy">
                            <ShieldCheckIcon />
                            <DropdownLabel>Privacy policy</DropdownLabel>
                        </DropdownItem>
                        <DropdownItem href="/share-feedback">
                            <LightBulbIcon />
                            <DropdownLabel>Share feedback</DropdownLabel>
                        </DropdownItem>
                        <DropdownDivider />
                        <DropdownItem
                            href={route("logout")}
                            as="button"
                            method="post"
                        >
                            <ArrowRightStartOnRectangleIcon />
                            <DropdownLabel>Sign out</DropdownLabel>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </SidebarFooter>
        </Sidebar>
    );
}
