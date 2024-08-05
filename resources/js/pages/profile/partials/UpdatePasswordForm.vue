<script lang="ts" setup>
import { useForm } from '@inertiajs/vue3';
import { ref } from 'vue';
import { route } from 'ziggy-js';
import { useFocus } from '@vueuse/core';
import InputError from '@/components/InputError.vue';
import Label from '@/components/ui/label/Label.vue';
import Button from '@/components/ui/button/Button.vue';
import Input from '@/components/ui/input/Input.vue';

const passwordInput = ref<HTMLInputElement | null>(null);
const currentPasswordInput = ref<HTMLInputElement | null>(null);
const { focused: passwordFocused } = useFocus(passwordInput);
const { focused: currentPasswordFocused } = useFocus(currentPasswordInput);

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

function updatePassword() {
    form.put(route('password.update'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {
            if (form.errors.password) {
                form.reset('password', 'password_confirmation');
                passwordFocused.value = true;
            }
            if (form.errors.current_password) {
                form.reset('current_password');
                currentPasswordFocused.value = true;
            }
        },
    });
}
</script>

<template>
    <form class="grid grid-cols-1 gap-8 border-b pb-12 md:grid-cols-3" @submit.prevent="updatePassword">
        <div>
            <h2 class="text-base font-semibold leading-7">
                Update Password
            </h2>
            <p class="mt-1 text-sm leading-6 text-muted-foreground">
                Ensure your account is using a long, random password to stay
                secure.
            </p>
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-6">
            <div class="grid gap-2 sm:col-span-4">
                <Label for="current_password">Current Password</Label>
                <Input
                    id="current_password"
                    ref="currentPasswordInput"
                    v-model="form.current_password"
                    autocomplete="current-password"
                    type="password"
                />
                <InputError
                    :message="form.errors.current_password"
                    class="mt-2"
                />
            </div>

            <div class="grid gap-2 sm:col-span-4">
                <Label for="password">New Password</Label>
                <Input
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    autocomplete="new-password"
                    class="mt-1 block w-full"
                    type="password"
                />
                <InputError :message="form.errors.password" class="mt-2" />
            </div>

            <div class="grid gap-2 sm:col-span-4">
                <Label for="password_confirmation">Confirm Password</Label>
                <Input
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    autocomplete="new-password"
                    class="mt-1 block w-full"
                    type="password"
                />
                <InputError
                    :message="form.errors.password_confirmation"
                    class="mt-2"
                />
            </div>

            <div class="flex flex-row items-center gap-4">
                <Button :disabled="form.processing" type="submit">
                    Save
                </Button>
                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-sm text-gray-600 dark:text-neutral-400"
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </div>
    </form>
</template>
