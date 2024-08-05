<script lang="ts" setup>
import { Home, LineChart, Menu, Package, Search, ShoppingCart, Users } from 'lucide-vue-next';

import { route } from 'ziggy-js';
import { AvatarIcon, GithubLogoIcon, QuestionMarkCircledIcon } from '@radix-icons/vue';
import { Link } from '@inertiajs/vue3';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Logo from '@/components/Logo.vue';
import { Separator } from '@/components/ui/separator';
import ThemeToggle from '@/components/ThemeToggle.vue';

defineProps<{
    headerText?: string;
}>();
</script>

<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Logo class="h-10 w-auto" />
                </div>
                <div class="flex-1">
                    <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
                        <Link
                            :class="{ 'text-prima`ry bg-muted': $page.component === 'dashboard/Index' }"
                            :href="route('dashboard')"
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                        >
                            <Home class="size-4" />
                            Dashboard
                        </Link>
                        <h1 class="mt-4 text-sm text-muted-foreground">
                            Tools
                        </h1>
                        <Link
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            href="#"
                        >
                            <ShoppingCart class="size-4" />
                            Orders
                            <Badge class="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
                                6
                            </Badge>
                        </Link>
                        <a
                            class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
                            href="#"
                        >
                            <Package class="size-4" />
                            Products
                        </a>
                        <a
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            href="#"
                        >
                            <Users class="size-4" />
                            Customers
                        </a>
                        <a
                            class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                            href="#"
                        >
                            <LineChart class="size-4" />
                            Analytics
                        </a>
                    </nav>
                </div>
                <div class="mt-auto p-4">
                    <Card>
                        <CardHeader class="p-2 pt-0 md:p-4">
                            <CardTitle>Upgrade to Pro</CardTitle>
                            <CardDescription>
                                Unlock all features and get unlimited access to our support
                                team.
                            </CardDescription>
                        </CardHeader>
                        <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
                            <Button class="w-full" size="sm">
                                Upgrade
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <div class="flex flex-col">
            <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                <Sheet>
                    <SheetTrigger as-child>
                        <Button
                            class="shrink-0 md:hidden"
                            size="icon"
                            variant="outline"
                        >
                            <Menu class="size-5" />
                            <span class="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent class="flex flex-col" side="left">
                        <nav class="grid gap-2 font-medium">
                            <div
                                class="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Logo class="h-8 w-auto" />
                                <span class="sr-only">diyOS</span>
                            </div>
                            <Separator class="mt-2" />
                            <Link
                                :href="route('dashboard')"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                <Home class="size-5" />
                                Dashboard
                            </Link>
                            <h1 class="mt-4 text-sm text-muted-foreground">
                                Tools
                            </h1>
                            <Link
                                :href="route('orders.index')"
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                            >
                                <ShoppingCart class="size-5" />
                                Orders
                                <Badge class="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full">
                                    6
                                </Badge>
                            </Link>
                            <a
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                href="#"
                            >
                                <Package class="size-5" />
                                Products
                            </a>
                            <a
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                href="#"
                            >
                                <Users class="size-5" />
                                Customers
                            </a>
                            <a
                                class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                href="#"
                            >
                                <LineChart class="size-5" />
                                Analytics
                            </a>
                        </nav>
                        <div class="mt-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Upgrade to Pro</CardTitle>
                                    <CardDescription>
                                        Unlock all features and get unlimited access to our
                                        support team.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Button class="w-full" size="sm">
                                        Upgrade
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </SheetContent>
                </Sheet>
                <div class="w-full flex-1">
                    <form>
                        <div class="relative">
                            <Search class="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                            <Input
                                class="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                placeholder="Search products..."
                                type="search"
                            />
                        </div>
                    </form>
                </div>
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Avatar class="size-8">
                            <AvatarImage alt="@radix-vue" src="https://github.com/radix-vue.png" />
                            <AvatarFallback>CN</AvatarFallback>
                            <span class="sr-only">Toggle user menu</span>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link :href="route('profile.edit')">
                                <DropdownMenuItem>
                                    <AvatarIcon class="mr-2" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                            </Link>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <GithubLogoIcon class="mr-2" />
                            <span>GitHub</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <QuestionMarkCircledIcon class="mr-2" />
                            <span>Support</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Link
                            :href="route('logout')"
                            as="button"
                            class="w-full"
                            method="post"
                        >
                            <DropdownMenuItem>
                                Log out
                            </DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <slot name="breadcrumb" />
                <div v-if="!!headerText" class="flex items-center">
                    <h1 class="text-lg font-semibold md:text-2xl">
                        {{ headerText }}
                    </h1>
                </div>
                <div class="flex flex-1 justify-center">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
