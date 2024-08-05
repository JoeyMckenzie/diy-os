<script lang="ts" setup>
import { useForm } from '@inertiajs/vue3';
import { useFocus } from '@vueuse/core';
import { ref } from 'vue';
import { route } from 'ziggy-js';
import InputError from '@/components/InputError.vue';
import Button from '@/components/ui/button/Button.vue';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import Input from '@/components/ui/input/Input.vue';
import Label from '@/components/ui/label/Label.vue';

const confirmingUserDeletion = ref(false);
const passwordInput = ref<HTMLInputElement | null>(null);
const { focused } = useFocus(passwordInput);

const form = useForm({
    password: '',
});

const focusInput = () => (focused.value = true);

function deleteUser() {
    form.delete(route('profile.destroy'), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => focusInput(),
        onFinish: () => {
            form.reset();
        },
    });
}

function closeModal() {
    confirmingUserDeletion.value = false;
    form.reset();
}
</script>

<template>
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
        <div>
            <h2 class="text-base font-semibold leading-7">
                Delete account
            </h2>
            <p class="mt-1 text-sm leading-6 text-muted-foreground">
                Once your account is deleted, all of its resources and data
                will be permanently deleted. This action cannot be reversed!
            </p>
        </div>

        <div class="max-w-2xl space-y-10 md:col-span-2">
            <Dialog>
                <DialogTrigger as-child>
                    <Button variant="destructive">
                        Yes, delete my account
                    </Button>
                </DialogTrigger>
                <DialogContent class="w-full">
                    <DialogHeader>
                        <DialogTitle>
                            Are you sure you want to delete your account?
                        </DialogTitle>
                        <DialogDescription>
                            Once your account is deleted, all of its resources and
                            data will be permanently deleted. Please enter your
                            password to confirm you would like to permanently delete
                            your account.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="gap-4 py-4">
                        <Label class="sr-only" for="password">Password</Label>

                        <Input
                            id="password"
                            ref="passwordInput"
                            v-model="form.password"
                            class="mt-1 block w-full"
                            placeholder="Password"
                            type="password"
                            @keyup.enter="deleteUser"
                        />

                        <InputError :message="form.errors.password" class="mt-2" />
                    </div>
                    <DialogFooter class="mt-6 flex justify-end gap-y-2">
                        <DialogClose as-child>
                            <Button variant="secondary" @click="closeModal">
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            variant="destructive"
                            @click="deleteUser"
                        >
                            Delete Account
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    </div>
</template>
