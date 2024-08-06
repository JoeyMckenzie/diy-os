<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import { navigationMenu } from './menu';
import Logo from '@/components/Logo.vue';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
</script>

<template>
    <nav class="grid gap-2 text-sm font-medium">
        <div
            class="flex items-center gap-2 font-semibold"
        >
            <Logo class="h-8 w-auto" />
            <span class="sr-only">diyOS</span>
        </div>
        <Separator class="mt-2" />

        <Link
            v-for="item in navigationMenu.primary"
            :key="item.component"
            :class="{
                'bg-muted text-foreground': $page.component === item.component,
                'text-muted-foreground': $page.component !== item.component,
            }"
            :href="route(item.route)"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-lg px-3 py-2 hover:text-foreground"
        >
            <component :is="item.icon" class="size-5" />
            {{ item.label }}
            <Badge
                v-if="item.badgeContents"
                class="ml-auto flex size-6 shrink-0 items-center justify-center rounded-full"
            >
                {{ item.badgeContents }}
            </Badge>
        </Link>
        <h1 class="mt-4 text-sm text-muted-foreground">
            Tools
        </h1>
        <Link
            v-for="item in navigationMenu.tools"
            :key="item.component"
            :class="{
                'bg-muted text-foreground': $page.component === item.component,
                'text-muted-foreground': $page.component !== item.component,
            }"
            :href="route(item.route)"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-lg px-3 py-2 hover:text-foreground"
        >
            <component :is="item.icon" aria-hidden="true" class="size-5" />
            {{ item.label }}
        </Link>
    </nav>
</template>
