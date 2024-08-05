<script lang="ts" setup>
import { router, useForm, usePage } from '@inertiajs/vue3';
import { ref } from 'vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

defineProps<{
    mustVerifyEmail?: boolean;
    status?: string;
}>();

const photoInputRef = ref<HTMLInputElement | null>(null);
const user = usePage().props.auth.user;
const form = useForm({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
});

function uploadAvatar(event: Event) {
    const fileEvent = event as Event & { target: HTMLInputElement };
    if (fileEvent?.target?.files?.[0]) {
        const avatar = fileEvent.target.files[0];
        router.post('/avatar', {
            avatar,
        });
    }
}

function clickAvatarInput() {
    if (photoInputRef?.value) {
        photoInputRef.value.click();
    }
}
</script>

<template>
    <form class="grid grid-cols-1 gap-8 border-b pb-12 md:grid-cols-3" @submit.prevent="form.patch(route('profile.update'))">
        <div>
            <h2 class="text-base font-semibold leading-7">
                Profile Information
            </h2>
            <p class="mt-1 text-sm leading-6 text-muted-foreground">
                Update your name, email, or profile image.
            </p>
        </div>

        <div class="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-6 md:col-span-2">
            <div class="grid gap-2 sm:col-span-3">
                <Label for="first_name">First name</Label>
                <Input id="first_name" v-model="form.first_name" autocomplete="given-name" name="first_name" type="text" />
            </div>

            <div class="grid gap-2 sm:col-span-3">
                <Label for="last_name">Last name</Label>
                <Input id="last_name" v-model="form.last_name" autocomplete="family-name" name="last_name" type="text" />
            </div>

            <div class="grid gap-2 sm:col-span-3">
                <Label for="email">Email address</Label>
                <Input id="email" v-model="form.email" autocomplete="email" name="email" type="email" />
            </div>

            <div class="sm:col-span-3">
                <Label for="photo">Photo</Label>
                <div class="mt-2 flex items-center gap-x-3">
                    <Avatar class="size-12" shape="square">
                        <AvatarImage v-if="$page.props.auth.user.avatar_url" :src="$page.props.auth.user.avatar_url" alt="user profile picture" />
                        <AvatarFallback>{{ $page.props.auth.user.initials }}</AvatarFallback>
                        <span class="sr-only">Toggle user menu</span>
                    </Avatar>
                    <input ref="photoInputRef" accept="image/*" class="hidden" name="profile photo" type="file" @change="uploadAvatar($event)">
                    <Button type="button" variant="outline" @click="clickAvatarInput">
                        Change
                    </Button>
                </div>
                <p v-if="$page.props.errors?.avatar" class="mt-2 text-sm leading-6 text-destructive">
                    {{ $page.props.errors.avatar }}
                </p>
                <p class="mt-2 text-sm text-muted-foreground">
                    JPG, GIF or PNG. 1MB max.
                </p>
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
