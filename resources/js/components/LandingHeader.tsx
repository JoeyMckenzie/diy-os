import { Logo } from "@/components/Logo";
import { useTheme } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/catalyst/button";
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from "@/components/catalyst/dialog";
import { SidebarLabel } from "@/components/catalyst/sidebar";
import { Text, TextLink } from "@/components/catalyst/text";
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";
import { MoonIcon } from "@heroicons/react/16/solid";
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
    SunIcon,
} from "@heroicons/react/20/solid";
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import { useState } from "react";

const navigation = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
];

const products = [
    {
        name: "Analytics",
        description: "Get a better understanding of your traffic",
        href: "#",
        icon: ChartPieIcon,
    },
    {
        name: "Engagement",
        description: "Speak directly to your customers",
        href: "#",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Security",
        description: "Your customers’ data will be safe and secure",
        href: "#",
        icon: FingerPrintIcon,
    },
    {
        name: "Integrations",
        description: "Connect with third-party tools",
        href: "#",
        icon: SquaresPlusIcon,
    },
    {
        name: "Automations",
        description: "Build strategic funnels that will convert",
        href: "#",
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: "Watch demo", href: "#", icon: PlayCircleIcon },
    { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export function LandingHeader() {
    const { theme, toggleTheme } = useTheme();
    const displayTheme =
        theme.charAt(0).toUpperCase() + theme.slice(1).toLowerCase();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link href={route("welcome")} className="-m-1.5 p-1.5">
                        <Text className="sr-only">diyOS</Text>
                        <Logo className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <Button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Text className="sr-only">Open main menu</Text>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </Button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 font-semibold text-gray-900 text-sm leading-6">
                            Product
                            <ChevronDownIcon
                                aria-hidden="true"
                                className="h-5 w-5 flex-none text-gray-400"
                            />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="-left-8 absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon
                                                aria-hidden="true"
                                                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <a
                                                href={item.href}
                                                className="block font-semibold text-gray-900"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 text-sm leading-6 hover:bg-gray-100"
                                    >
                                        <item.icon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none text-gray-400"
                                        />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a
                        href={route("welcome")}
                        className="font-semibold text-gray-900 text-sm leading-6"
                    >
                        Features
                    </a>
                    <a
                        href={route("welcome")}
                        className="font-semibold text-gray-900 text-sm leading-6"
                    >
                        Marketplace
                    </a>
                    <a
                        href={route("welcome")}
                        className="font-semibold text-gray-900 text-sm leading-6"
                    >
                        Company
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ThemeToggle />
                    <a
                        href={route("welcome")}
                        className="font-semibold text-gray-900 text-sm leading-6"
                    >
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden"
                size="sm"
            >
                <DialogTitle className="space-y-2">
                    <Logo className="w-36" />
                </DialogTitle>
                <DialogDescription>
                    Building futures one at a time
                </DialogDescription>
                <DialogBody>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <TextLink
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 font-semibold text-base leading-7 no-underline dark:hover:bg-neutral-800 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </TextLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogBody>
                <DialogActions>
                    <Button plain onClick={toggleTheme}>
                        {theme === "light" && <SunIcon />}
                        {theme === "dark" && <MoonIcon />}
                        <SidebarLabel>{displayTheme}</SidebarLabel>
                    </Button>
                    <Button href={route("login")}>Sign in</Button>
                </DialogActions>
            </Dialog>
        </header>
    );
}
