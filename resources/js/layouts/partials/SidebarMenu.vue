<script lang="ts" setup>
import { Home } from 'lucide-vue-next';
import { Link } from '@inertiajs/vue3';
import { menu } from './menu';
</script>

<template>
    <nav class="mt-2 grid items-start px-2 text-sm font-medium lg:px-4">
        <Link
            :class="{
                'bg-muted text-foreground': $page.component === 'dashboard/Index',
                'text-muted-foreground': $page.component !== 'dashboard/Index',
            }"
            :href="route('dashboard')"
            class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-foreground"
        >
            <Home class="size-4" />
            Dashboard
        </Link>
        <h1 class="my-4 text-sm text-muted-foreground">
            Tools
        </h1>
        <div class="flex flex-col justify-center space-y-2">
            <Link
                v-for="item in menu"
                :key="item.component"
                :class="{
                    'bg-muted text-foreground': $page.component === item.component,
                    'text-muted-foreground': $page.component !== item.component,
                }"
                :href="route(item.route)"
                class="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-foreground"
            >
                <component :is="item.icon" aria-hidden="true" class="size-4" />
                {{ item.label }}
            </Link>
        </div>
    </nav>
</template>
