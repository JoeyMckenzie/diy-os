<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import Logo from '@/components/Logo.vue';
</script>

<template>
    <div
        class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 dark:bg-neutral-900 sm:justify-center sm:pt-0"
    >
        <div>
            <Link href="/">
                <Logo class="h-20" />
            </Link>
        </div>

        <div class="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md">
            <slot />
        </div>
    </div>
</template>
