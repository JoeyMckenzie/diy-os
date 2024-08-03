import {
    ArrowRightStartOnRectangleIcon,
    ChevronUpIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid';
import { Avatar } from '@/components/catalyst/avatar';
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/catalyst/dropdown';
import { SidebarItem } from '@/components/catalyst/sidebar';
import type { User } from '@/types';

export function UserProfileDropdown({ user }: { user: User }) {
    return (
        <Dropdown>
            <DropdownButton as={SidebarItem}>
                <span className="flex min-w-0 items-center gap-3">
                    {!!user.avatar_url && (
                        <Avatar
                            src={user.avatar_url}
                            className="size-10"
                            square
                            alt="user avatar"
                        />
                    )}
                    {!user.avatar_url && (
                        <Avatar
                            initials={user.initials}
                            className="size-10"
                            square
                            alt="user avatar"
                        />
                    )}
                    <span className="min-w-0">
                        <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                            {user.name}
                        </span>
                        <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                            {user.email}
                        </span>
                    </span>
                </span>
                <ChevronUpIcon />
            </DropdownButton>
            <DropdownMenu className="min-w-64" anchor="top start">
                <DropdownItem href={route('profile.edit')}>
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
                <DropdownItem href={route('logout')} as="button" method="post">
                    <ArrowRightStartOnRectangleIcon />
                    <DropdownLabel>Sign out</DropdownLabel>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
