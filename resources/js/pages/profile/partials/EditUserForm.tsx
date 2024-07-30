import { Button } from "@/components/catalyst/button";
import {
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Text } from "@/components/catalyst/text";
import {
    ChartBarSquareIcon,
    Cog6ToothIcon,
    FolderIcon,
    GlobeAltIcon,
    ServerIcon,
    SignalIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";

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
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <main className="xl:pl-72">
            {/* Settings forms */}
            <div className="divide-y divide-white/5">
                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
                    <div>
                        <Heading>Personal Information</Heading>
                        <Text>
                            Use a permanent address where you can receive mail.
                        </Text>
                    </div>

                    <form className="md:col-span-2">
                        <Fieldset className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <FieldGroup className="col-span-full flex items-center gap-x-8">
                                <img
                                    alt=""
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                                />
                                <div>
                                    <Button>Change avatar</Button>
                                    <p className="mt-2 text-gray-400 text-xs leading-5">
                                        JPG, GIF or PNG. 1MB max.
                                    </p>
                                </div>
                            </FieldGroup>

                            <FieldGroup className="sm:col-span-3">
                                <Field>
                                    <Label
                                        htmlFor="first-name"
                                        className="block font-medium text-sm text-white leading-6"
                                    >
                                        First name
                                    </Label>
                                    <Input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                    />
                                </Field>
                            </FieldGroup>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="email"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="username"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Username
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md bg-white/5 ring-1 ring-white/10 ring-inset focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-inset">
                                        <span className="flex select-none items-center pl-3 text-gray-400 sm:text-sm">
                                            example.com/
                                        </span>
                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            placeholder="janesmith"
                                            autoComplete="username"
                                            className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-white sm:text-sm sm:leading-6 focus:ring-0"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="timezone"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Timezone
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="timezone"
                                        name="timezone"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset [&_*]:text-black sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    >
                                        <option>Pacific Standard Time</option>
                                        <option>Eastern Standard Time</option>
                                        <option>Greenwich Mean Time</option>
                                    </select>
                                </div>
                            </div>
                        </Fieldset>

                        <div className="mt-8 flex">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-500 px-3 py-2 font-semibold text-sm text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
                    <div>
                        <h2 className="font-semibold text-base text-white leading-7">
                            Change password
                        </h2>
                        <p className="mt-1 text-gray-400 text-sm leading-6">
                            Update your password associated with your account.
                        </p>
                    </div>

                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="current-password"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Current password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="current-password"
                                        name="current_password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="new-password"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    New password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="new-password"
                                        name="new_password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="confirm-password"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Confirm password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="confirm-password"
                                        name="confirm_password"
                                        type="password"
                                        autoComplete="new-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-500 px-3 py-2 font-semibold text-sm text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
                    <div>
                        <h2 className="font-semibold text-base text-white leading-7">
                            Log out other sessions
                        </h2>
                        <p className="mt-1 text-gray-400 text-sm leading-6">
                            Please enter your password to confirm you would like
                            to log out of your other sessions across all of your
                            devices.
                        </p>
                    </div>

                    <form className="md:col-span-2">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="logout-password"
                                    className="block font-medium text-sm text-white leading-6"
                                >
                                    Your password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="logout-password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-white/10 ring-inset sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex">
                            <button
                                type="submit"
                                className="rounded-md bg-indigo-500 px-3 py-2 font-semibold text-sm text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-500 focus-visible:outline-offset-2"
                            >
                                Log out other sessions
                            </button>
                        </div>
                    </form>
                </div>

                <div className="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 md:grid-cols-3 lg:px-8 sm:px-6">
                    <div>
                        <h2 className="font-semibold text-base text-white leading-7">
                            Delete account
                        </h2>
                        <p className="mt-1 text-gray-400 text-sm leading-6">
                            No longer want to use our service? You can delete
                            your account here. This action is not reversible.
                            All information related to this account will be
                            deleted permanently.
                        </p>
                    </div>

                    <form className="flex items-start md:col-span-2">
                        <button
                            type="submit"
                            className="rounded-md bg-red-500 px-3 py-2 font-semibold text-sm text-white shadow-sm hover:bg-red-400"
                        >
                            Yes, delete my account
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}
