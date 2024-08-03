<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
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
} from '@heroicons/vue/24/outline';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
import { route } from 'ziggy-js';
import type { User } from '../types';
import Logo from '../components/Logo.vue';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle.vue';

defineProps<{
    user: User;
}>();

const navigation = [
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    {
        name: 'Documents',
        href: '#',
        icon: DocumentDuplicateIcon,
        current: false,
    },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];
const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
];
const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
];
</script>

<template>
    <Sheet class="size-full">
        <SheetContent class="flex flex-col" side="left">
            <SheetHeader>
                <SheetTitle>
                    <Logo class="h-10" />
                </SheetTitle>
            </SheetHeader>
            <Separator />
            <nav class="flex flex-1 flex-col">
                <Button :href="route('dashboard')" class="group -mx-2 flex w-full justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6" variant="ghost">
                    <HomeIcon class="size-6 shrink-0" />
                    Dashboard
                </Button>
                <h1 class="mt-6 text-sm font-semibold leading-6 text-zinc-400">
                    Tools
                </h1>
                <ul class="flex flex-1 flex-col gap-y-7" role="list">
                    <li>
                        <ul class="-mx-2 space-y-1" role="list">
                            <li v-for="item in navigation" :key="item.name">
                                <Button :href="item.href" class="group flex w-full justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6" variant="ghost">
                                    <component :is="item.icon" aria-hidden="true" class="size-6 shrink-0" />
                                    {{ item.name }}
                                </Button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <SheetFooter class="flex w-full grow items-end">
                <Button class="w-full justify-center" variant="outline">
                    <Cog6ToothIcon aria-hidden="true" class="size-6 shrink-0" />
                    Settings
                </Button>
            </SheetFooter>
        </SheetContent>

        <!-- Static sidebar for desktop -->
        <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
            <!-- Sidebar component, swap this element with another sidebar if you like -->
            <div class="flex grow flex-col gap-y-4 overflow-y-auto border-r px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                    <Logo class="mt-4 h-10 w-auto" />
                </div>
                <Separator />
                <nav class="flex flex-1 flex-col">
                    <ul class="flex flex-1 flex-col gap-y-7" role="list">
                        <li>
                            <ul class="-mx-2 space-y-1" role="list">
                                <li v-for="item in navigation" :key="item.name">
                                    <Button :href="item.href" class="group flex w-full justify-start gap-x-3 rounded-md p-2 text-sm font-semibold leading-6" variant="ghost">
                                        <component :is="item.icon" aria-hidden="true" class="size-6 shrink-0" />
                                        {{ item.name }}
                                    </Button>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="text-xs font-semibold leading-6 text-zinc-400">
                                Your teams
                            </div>
                            <ul class="-mx-2 mt-2 space-y-1" role="list">
                                <li v-for="team in teams" :key="team.name">
                                    <a :class="[team.current ? 'bg-zinc-50 text-indigo-600' : 'text-zinc-700 hover:bg-zinc-50 hover:text-indigo-600']" :href="team.href" class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6">
                                        <span :class="[team.current ? 'border-indigo-600 text-indigo-600' : 'border-zinc-200 text-zinc-400 group-hover:border-indigo-600 group-hover:text-indigo-600']" class="flex size-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium">{{ team.initial }}</span>
                                        <span class="truncate">{{ team.name }}</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="mt-auto">
                            <a class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-zinc-700 hover:bg-zinc-50 hover:text-indigo-600" href="#">
                                <Cog6ToothIcon aria-hidden="true" class="size-6 shrink-0 text-zinc-400 group-hover:text-indigo-600" />
                                Settings
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

        <div class="lg:pl-72">
            <div class="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div class="flex h-16 items-center justify-between gap-x-4 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:justify-end lg:px-0 lg:shadow-none">
                    <div class="-m-2.5 p-2.5 lg:hidden">
                        <SheetTrigger as-child>
                            <Button variant="outline">
                                <span class="sr-only">Open sidebar</span>
                                <Bars3Icon aria-hidden="true" class="size-6" />
                            </Button>
                        </SheetTrigger>
                    </div>

                    <div class="flex items-center gap-x-4 lg:gap-x-6">
                        <Button class="-m-2.5 p-2.5" variant="ghost">
                            <span class="sr-only">View notifications</span>
                            <BellIcon aria-hidden="true" class="size-6" />
                        </Button>

                        <ThemeToggle />

                        <!-- Separator -->
                        <div aria-hidden="true" class="hidden lg:block lg:h-6 lg:w-px lg:bg-zinc-200" />

                        <!-- Profile dropdown -->
                        <Menu as="div" class="relative">
                            <MenuButton class="-m-1.5 flex items-center p-1.5">
                                <span class="sr-only">Open user menu</span>
                                <img alt="" class="size-8 rounded-full bg-zinc-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">
                                <span class="hidden lg:flex lg:items-center">
                                    <span aria-hidden="true" class="ml-4 text-sm font-semibold leading-6 text-zinc-900">Tom Cook</span>
                                    <ChevronDownIcon aria-hidden="true" class="ml-2 size-5 text-zinc-400" />
                                </span>
                            </MenuButton>
                            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-zinc-900/5 focus:outline-none">
                                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                                        <a :class="[active ? 'bg-zinc-50' : '']" :href="item.href" class="block px-3 py-1 text-sm leading-6 text-zinc-900">{{ item.name }}</a>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
                <Separator />
            </div>

            <main class="py-10">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <slot />
                </div>
            </main>
        </div>
    </Sheet>
</template>
