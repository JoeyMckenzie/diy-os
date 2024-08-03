import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Logo } from '@/components/Logo';
import { useTheme } from '@/components/ThemeProvider';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/catalyst/button';
import {
    Dialog,
    DialogActions,
    DialogBody,
    DialogDescription,
    DialogTitle,
} from '@/components/catalyst/dialog';
import { Link } from '@/components/catalyst/link';
import { Text, TextLink } from '@/components/catalyst/text';

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];

const products = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Security',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: FingerPrintIcon,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
];
const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export function LandingHeader() {
    const { theme, toggleTheme } = useTheme();
    const displayTheme
        = theme.charAt(0).toUpperCase() + theme.slice(1).toLowerCase();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header>
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link href={route('welcome')} className="-m-1.5 p-1.5">
                        <Text className="sr-only">diyOS</Text>
                        <Logo className="h-8 w-auto" />
                    </Link>
                </div>
                <div className="flex space-x-2 lg:hidden">
                    <ThemeSwitch />
                    <Button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Text className="sr-only">Open main menu</Text>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </Button>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ThemeToggle />
                    <Button plain href={route('welcome')}>
                        Log in
                        {' '}
                        <span aria-hidden="true">&rarr;</span>
                    </Button>
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
                                {navigation.map(item => (
                                    <TextLink
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 no-underline hover:bg-gray-50 dark:hover:bg-zinc-800"
                                    >
                                        {item.name}
                                    </TextLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogBody>
                <DialogActions>
                    <Button href={route('login')}>Sign in</Button>
                </DialogActions>
            </Dialog>
        </header>
    );
}
