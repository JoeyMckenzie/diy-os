import {
    ArrowRightStartOnRectangleIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserIcon,
} from '@heroicons/react/16/solid';
import { InboxIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { Avatar } from '@/components/catalyst/avatar';
import {
    Dropdown,
    DropdownButton,
    DropdownDivider,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from '@/components/catalyst/dropdown';
import {
    Navbar,
    NavbarItem,
    NavbarSection,
    NavbarSpacer,
} from '@/components/catalyst/navbar';
import type { User } from '@/types';

export function MobileNavbar({ user }: { user: User }) {
    return (
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
                        {!!user.avatar_url && (
                            <Avatar src={user.avatar_url} square />
                        )}
                        {!user.avatar_url && (
                            <Avatar initials={user.initials} square />
                        )}
                    </DropdownButton>
                    <DropdownMenu className="min-w-64" anchor="bottom end">
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
                        <DropdownItem
                            href={route('logout')}
                            as="button"
                            method="post"
                        >
                            <ArrowRightStartOnRectangleIcon />
                            <DropdownLabel>Sign out</DropdownLabel>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarSection>
        </Navbar>
    );
}
