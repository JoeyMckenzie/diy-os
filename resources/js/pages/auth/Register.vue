<script lang="ts" setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';
import GuestLayout from '@/layouts/GuestLayout.vue';
import { Separator } from '@/components/ui/separator';
import InputError from '@/components/InputError.vue';

const form = useForm({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

function submit() {
    form.post(route('register'), {
        onFinish: () => {
            form.reset('password', 'password_confirmation');
        },
    });
}
</script>

<template>
    <GuestLayout>
        <Head title="Register" />
        <div class="grid gap-2 text-center">
            <p class="text-balance text-muted-foreground">
                Enter your name and email below to sign up
            </p>
        </div>
        <form class="grid gap-4" @submit.prevent="submit">
            <div class="grid grid-cols-2 gap-4">
                <div class="grid gap-2">
                    <Label for="first_name">First name</Label>
                    <Input
                        id="first_name"
                        v-model="form.first_name"
                        required
                        type="text"
                    />
                    <InputError :message="form.errors.first_name" class="mt-2" />
                </div>
                <div class="grid gap-2">
                    <Label for="last_name">Last name</Label>
                    <Input
                        id="last_name"
                        v-model="form.last_name"
                        required
                        type="text"
                    />
                    <InputError :message="form.errors.last_name" class="mt-2" />
                </div>
            </div>
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
                        :href="route('password.request')"
                        class="ml-auto inline-block text-sm underline"
                    >
                        Forgot your password?
                    </Link>
                </div>
                <Input id="password" v-model="form.password" required type="password" />
            </div>
            <Separator />
            <Button class="w-full" type="submit">
                Sign up
            </Button>
        </form>
        <div class="mt-4 text-center text-sm">
            Have an account?
            <Link :href="route('login')" class="underline">
                Sign in
            </Link>
        </div>
    </GuestLayout>
</template>
