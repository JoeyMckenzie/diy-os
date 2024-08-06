<script lang="ts" setup>
import { Menu, Search } from 'lucide-vue-next';
import { onMounted, ref } from 'vue';
import { router } from '@inertiajs/vue3';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/Logo.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import SidebarMenu from '@/layouts/partials/SidebarMenu.vue';
import MobileSidebarMenu from '@/layouts/partials/MobileSidebarMenu.vue';
import UserProfileDropdown from '@/layouts/partials/UserProfileDropdown.vue';

defineProps<{
    headerText?: string;
}>();

const sheetOpen = ref(false);

onMounted(() => {
    router.on('before', () => {
        sheetOpen.value = false;
    });
});
</script>

<template>
    <div class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <div class="hidden border-r bg-muted/40 md:block">
            <div class="flex h-full min-h-screen flex-col gap-2">
                <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Logo class="h-10 w-auto" />
                </div>
                <div class="flex-1">
                    <SidebarMenu />
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
                <Sheet :open="sheetOpen" @update:open="(open) => sheetOpen = open">
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
                        <MobileSidebarMenu />
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
                <UserProfileDropdown />
            </header>
            <main class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                <slot name="breadcrumb" />
                <div class="flex flex-row items-center justify-between">
                    <div v-if="!!headerText" class="flex items-center">
                        <h1 class="text-lg font-semibold md:text-2xl">
                            {{ headerText }}
                        </h1>
                    </div>
                    <slot name="action" />
                </div>
                <div class="flex flex-1 justify-center">
                    <slot />
                </div>
            </main>
        </div>
    </div>
</template>
