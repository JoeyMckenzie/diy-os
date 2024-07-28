import { ThemeToggle } from "@/components/ThemeToggle";
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
    ArrowRightStartOnRectangleIcon,
    Cog8ToothIcon,
    LightBulbIcon,
    ShieldCheckIcon,
    UserIcon,
} from "@heroicons/react/16/solid";
import { InboxIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export function MobileNavbar({ initials }: { initials: string }) {
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
                <ThemeToggle />
                <Dropdown>
                    <DropdownButton as={NavbarItem}>
                        <Avatar initials={initials} square />
                    </DropdownButton>
                    <DropdownMenu className="min-w-64" anchor="bottom end">
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
            </NavbarSection>
        </Navbar>
    );
}
