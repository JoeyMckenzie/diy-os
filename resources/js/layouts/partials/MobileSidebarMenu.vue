<script lang="ts" setup>
import { Home } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import { menu } from './menu';
import Logo from '@/components/Logo.vue';
import { Separator } from '@/components/ui/separator';
</script>

<template>
    <nav class="grid gap-2 font-medium">
        <div
            class="flex items-center gap-2 text-lg font-semibold"
        >
            <Logo class="h-8 w-auto" />
            <span class="sr-only">diyOS</span>
        </div>
        <Separator class="mt-2" />
        <Link
            :class="{
                'bg-muted text-foreground': $page.component === 'dashboard/Index',
                'text-muted-foreground': $page.component !== 'dashboard/Index',
            }"
            :href="route('dashboard')"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
        >
            <Home class="size-5" />
            Dashboard
        </Link>
        <h1 class="mt-4 text-sm text-muted-foreground">
            Tools
        </h1>
        <Link
            v-for="item in menu"
            :key="item.component"
            :class="{
                'bg-muted text-foreground': $page.component === item.component,
                'text-muted-foreground': $page.component !== item.component,
            }"
            :href="route(item.route)"
            class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-foreground"
        >
            <component :is="item.icon" aria-hidden="true" class="size-5" />
            {{ item.label }}
        </Link>
    </nav>
</template>
