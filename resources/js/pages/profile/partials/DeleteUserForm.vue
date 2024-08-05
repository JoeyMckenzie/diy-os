<script setup lang="ts">
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
    <section class="space-y-6">
        <header>
            <h2 class="text-lg font-medium">
                Delete Account
            </h2>

            <p class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                Once your account is deleted, all of its resources and data will
                be permanently deleted. Before deleting your account, please
                download any data or information that you wish to retain.
            </p>
        </header>

        <Dialog>
            <DialogTrigger as-child>
                <Button variant="destructive">
                    Delete Account
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
                    <Label for="password" class="sr-only">Password</Label>

                    <Input
                        id="password"
                        ref="passwordInput"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-full"
                        placeholder="Password"
                        @keyup.enter="deleteUser"
                    />

                    <InputError :message="form.errors.password" class="mt-2" />
                </div>
                <DialogFooter class="mt-6 flex justify-end">
                    <DialogClose as-child>
                        <Button variant="secondary" @click="closeModal">
                            Cancel
                        </Button>
                    </DialogClose>

                    <Button
                        variant="destructive"
                        class="ms-3"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing"
                        @click="deleteUser"
                    >
                        Delete Account
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </section>
</template>
