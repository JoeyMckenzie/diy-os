import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import type { User } from "@/types";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { clsx } from "clsx";
import { CircleUser } from "lucide-react";
import { type PropsWithChildren, useState } from "react";

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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Sheet>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-gray-200 border-r px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={clsx(
                                                    item.current
                                                        ? "bg-gray-50 text-indigo-600"
                                                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                                    "group flex gap-x-3 rounded-md p-2 font-semibold text-sm leading-6",
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={clsx(
                                                        item.current
                                                            ? "text-indigo-600"
                                                            : "text-gray-400 group-hover:text-indigo-600",
                                                        "h-6 w-6 shrink-0",
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="font-semibold text-gray-400 text-xs leading-6">
                                    Your teams
                                </div>
                                <ul className="-mx-2 mt-2 space-y-1">
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={clsx(
                                                    team.current
                                                        ? "bg-gray-50 text-indigo-600"
                                                        : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                                                    "group flex gap-x-3 rounded-md p-2 font-semibold text-sm leading-6",
                                                )}
                                            >
                                                <span
                                                    className={clsx(
                                                        team.current
                                                            ? "border-indigo-600 text-indigo-600"
                                                            : "border-gray-200 text-gray-400 group-hover:border-indigo-600 group-hover:text-indigo-600",
                                                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white font-medium text-[0.625rem]",
                                                    )}
                                                >
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">
                                                    {team.name}
                                                </span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a
                                    href={route("profile.edit")}
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 font-semibold text-gray-700 text-sm leading-6 hover:bg-gray-50 hover:text-indigo-600"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className="lg:pl-72">
                <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
                    <div className="flex h-16 items-center gap-x-4 border-gray-200 border-b bg-white px-4 shadow-sm sm:gap-x-6 lg:px-0 sm:px-6 lg:shadow-none">
                        <SheetTrigger
                            type="button"
                            onClick={() => setSidebarOpen(true)}
                            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                        </SheetTrigger>

                        {/* Separator */}
                        <div
                            aria-hidden="true"
                            className="h-6 w-px bg-gray-200 lg:hidden"
                        />

                        <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
                            <form
                                action="#"
                                method="GET"
                                className="relative flex flex-1"
                            >
                                <label
                                    htmlFor="search-field"
                                    className="sr-only"
                                >
                                    Search
                                </label>
                                <MagnifyingGlassIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
                                />
                                <input
                                    id="search-field"
                                    name="search"
                                    type="search"
                                    placeholder="Search..."
                                    className="block h-full w-full border-0 py-0 pr-0 pl-8 text-gray-900 placeholder:text-gray-400 sm:text-sm focus:ring-0"
                                />
                            </form>
                            <div className="flex items-center gap-x-4 lg:gap-x-6">
                                <button
                                    type="button"
                                    className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        aria-hidden="true"
                                        className="h-6 w-6"
                                    />
                                </button>

                                {/* Separator */}
                                <div
                                    aria-hidden="true"
                                    className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
                                />

                                {/* Profile dropdown */}
                                <div className="hidden sm:ms-6 sm:flex sm:items-center">
                                    <ThemeToggle />
                                    <div className="relative ms-3">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost">
                                                    {user.name}
                                                    <CircleUser className="-me-0.5 ms-2 h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent
                                                className="w-56"
                                                align="end"
                                            >
                                                <DropdownMenuLabel>
                                                    My Account
                                                </DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuGroup>
                                                    <DropdownMenuItem>
                                                        <Link
                                                            className="w-full"
                                                            href={route(
                                                                "profile.edit",
                                                            )}
                                                        >
                                                            Profile
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link
                                                            className="w-full text-start"
                                                            href={route(
                                                                "logout",
                                                            )}
                                                            method="post"
                                                            as="button"
                                                        >
                                                            Log Out
                                                        </Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="py-10">
                    <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
                        {children}
                    </div>
                </main>
            </div>
        </Sheet>
    );
}
