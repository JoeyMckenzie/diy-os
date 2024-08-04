<script lang="ts" setup>
import { Link } from '@inertiajs/vue3';
import Logo from '@/components/Logo.vue';
</script>

<template>
    <div class="min-h-screen w-full lg:grid lg:grid-cols-2">
        <div class="flex items-center justify-center py-12">
            <div class="mx-auto grid w-[350px] gap-6">
                <div>
                    <Link href="/">
                        <Logo class="h-20" />
                    </Link>
                </div>
                <slot />
            </div>
        </div>
        <div class="hidden bg-muted lg:block">
            <img
                alt="Image"
                class="size-full object-cover dark:brightness-[0.2] dark:grayscale"
                height="1080"
                src="https://www.shadcn-vue.com/placeholder.svg"
                width="1920"
            >
        </div>
    </div>
</template>
