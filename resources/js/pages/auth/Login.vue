<script lang="ts" setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
import InputError from '@/components/InputError.vue';

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
    <GuestLayout>
        <Head title="Login" />

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
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
                <InputError :message="form.errors.email" class="mt-2" />
            </div>
            <div class="grid gap-2">
                <div class="flex items-center">
                    <Label for="password">Password</Label>
                    <Link
                        v-if="canResetPassword"
                        :href="route('password.request')"
                        class="ml-auto inline-block text-sm underline"
                    >
                        Forgot your password?
                    </Link>
                </div>
                <Input id="password" v-model="form.password" required type="password" />
                <InputError :message="form.errors.password" class="mt-2" />
            </div>
            <div class="flex flex-row justify-between text-sm">
                <Label class="flex items-center">
                    <Checkbox
                        v-model:checked="form.remember"
                        name="remember"
                    />
                    <span class="ms-2 text-sm">Remember me</span>
                </Label>
                <div>
                    Need an account?
                    <Link :href="route('register')" class="underline">
                        Sign up
                    </Link>
                </div>
            </div>
            <Separator />
            <Button class="w-full" type="submit">
                Login
            </Button>
        </form>
    </GuestLayout>
</template>
