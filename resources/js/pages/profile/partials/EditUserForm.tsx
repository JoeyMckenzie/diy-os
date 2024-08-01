import { DeleteUserForm } from "@/pages/profile/partials/DeleteUserForm";
import { UpdateUserPasswordForm } from "@/pages/profile/partials/UpdateUserPasswordForm";
import { UpdateUserProfileInformationForm } from "@/pages/profile/partials/UpdateUserProfileInformationForm";
import {
    ChartBarSquareIcon,
    Cog6ToothIcon,
    FolderIcon,
    GlobeAltIcon,
    ServerIcon,
    SignalIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const navigation = [
    { name: "Projects", href: "#", icon: FolderIcon, current: false },
    { name: "Deployments", href: "#", icon: ServerIcon, current: false },
    { name: "Activity", href: "#", icon: SignalIcon, current: false },
    { name: "Domains", href: "#", icon: GlobeAltIcon, current: false },
    { name: "Usage", href: "#", icon: ChartBarSquareIcon, current: false },
    { name: "Settings", href: "#", icon: Cog6ToothIcon, current: true },
];
const teams = [
    { id: 1, name: "Planetaria", href: "#", initial: "P", current: false },
    { id: 2, name: "Protocol", href: "#", initial: "P", current: false },
    { id: 3, name: "Tailwind Labs", href: "#", initial: "T", current: false },
];
const secondaryNavigation = [
    { name: "Account", href: "#", current: true },
    { name: "Notifications", href: "#", current: false },
    { name: "Billing", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Integrations", href: "#", current: false },
];

export function EditUserForm() {
    return (
        <main>
            <div className="divide-y divide-white/5">
                <UpdateUserProfileInformationForm />
                <UpdateUserPasswordForm />
                <DeleteUserForm />
            </div>
        </main>
    );
}
