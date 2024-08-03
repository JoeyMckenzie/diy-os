<script lang="ts" setup>
import { Link, useForm } from '@inertiajs/vue3';
import { route } from 'ziggy-js';
import Logo from '@/components/Logo.vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';

defineProps<{
    canResetPassword?: boolean;
    status?: string;
}>();

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

function submit() {
    form.post(route('login'), {
        onFinish: () => {
            form.reset('password');
        },
    });
}
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
                <div class="grid gap-2 text-center">
                    <p class="text-balance text-muted-foreground">
                        Enter your email below to login to your account
                    </p>
                </div>
                <form class="grid gap-4" @submit.prevent="submit">
                    <div class="grid gap-2">
                        <Label for="email">Email</Label>
                        <Input
                            id="email"
                            v-model="form.email"
                            placeholder="m@example.com"
                            required
                            type="email"
                        />
                    </div>
                    <div class="grid gap-2">
                        <div class="flex items-center">
                            <Label for="password">Password</Label>
                            <a
                                class="ml-auto inline-block text-sm underline"
                                href="/forgot-password"
                            >
                                Forgot your password?
                            </a>
                        </div>
                        <Input id="password" v-model="form.password" required type="password" />
                    </div>
                    <Button class="w-full" type="submit">
                        Login
                    </Button>
                    <Button class="w-full" variant="outline">
                        Login with Google
                    </Button>
                </form>
                <div class="mt-4 text-center text-sm">
                    Don't have an account?
                    <Link :href="route('register')" class="underline">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
        <div class="hidden bg-muted lg:block">
            <img
                alt="Image"
                class="size-full object-cover dark:brightness-[0.2] dark:grayscale"
                height="1080"
                src="/placeholder.svg"
                width="1920"
            >
        </div>
    </div>
</template>
