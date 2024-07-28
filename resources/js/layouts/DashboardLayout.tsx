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
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer,
} from "@/components/catalyst/navbar";
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
import { SidebarLayout } from "@/components/catalyst/sidebar-layout";
import type { User } from "@/types";
import {
    ArrowRightStartOnRectangleIcon,
    ChevronDownIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    PlusIcon,
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
import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
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
        <SidebarLayout
            navbar={
                <Navbar>
                    <NavbarSpacer />
                    <NavbarSection>
                        <NavbarItem href="/search" aria-label="Search">
                            <MagnifyingGlassIcon />
                        </NavbarItem>
                        <NavbarItem href="/inbox" aria-label="Inbox">
                            <InboxIcon />
                        </NavbarItem>
                        <Dropdown>
                            <DropdownButton as={NavbarItem}>
                                <Avatar src="/profile-photo.jpg" square />
                            </DropdownButton>
                            <DropdownMenu
                                className="min-w-64"
                                anchor="bottom end"
                            >
                                <DropdownItem href="/my-profile">
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
                                    <DropdownLabel>
                                        Privacy policy
                                    </DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownLabel>
                                        Share feedback
                                    </DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavbarSection>
                </Navbar>
            }
            sidebar={
                <Sidebar>
                    <SidebarHeader>
                        <Dropdown>
                            <DropdownButton
                                as={SidebarItem}
                                className="lg:mb-2.5"
                            >
                                <Avatar src="/tailwind-logo.svg" />
                                <SidebarLabel>Tailwind Labs</SidebarLabel>
                                <ChevronDownIcon />
                            </DropdownButton>
                            <DropdownMenu
                                className="min-w-80 lg:min-w-64"
                                anchor="bottom start"
                            >
                                <DropdownItem href="/teams/1/settings">
                                    <Cog8ToothIcon />
                                    <DropdownLabel>Settings</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/teams/1">
                                    <Avatar
                                        slot="icon"
                                        src="/tailwind-logo.svg"
                                    />
                                    <DropdownLabel>Tailwind Labs</DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/teams/2">
                                    <Avatar
                                        slot="icon"
                                        initials="WC"
                                        className="bg-purple-500 text-white"
                                    />
                                    <DropdownLabel>Workcation</DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/teams/create">
                                    <PlusIcon />
                                    <DropdownLabel>
                                        New team&hellip;
                                    </DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
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
                            <SidebarItem href="/events/2">
                                Viking People
                            </SidebarItem>
                            <SidebarItem href="/events/3">
                                Six Fingers — DJ Set
                            </SidebarItem>
                            <SidebarItem href="/events/4">
                                We All Look The Same
                            </SidebarItem>
                        </SidebarSection>
                        <SidebarSpacer />
                        <SidebarSection>
                            <SidebarItem href="/support">
                                <SunIcon />
                                <SidebarLabel>Theme</SidebarLabel>
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
                                        src="/profile-photo.jpg"
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
                            <DropdownMenu
                                className="min-w-64"
                                anchor="top start"
                            >
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
                                    <DropdownLabel>
                                        Privacy policy
                                    </DropdownLabel>
                                </DropdownItem>
                                <DropdownItem href="/share-feedback">
                                    <LightBulbIcon />
                                    <DropdownLabel>
                                        Share feedback
                                    </DropdownLabel>
                                </DropdownItem>
                                <DropdownDivider />
                                <DropdownItem href="/logout">
                                    <ArrowRightStartOnRectangleIcon />
                                    <DropdownLabel>Sign out</DropdownLabel>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </SidebarFooter>
                </Sidebar>
            }
        >
            {children}
        </SidebarLayout>
    );
}
