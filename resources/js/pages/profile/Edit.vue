<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayoutV2 from '@/layouts/AuthenticatedLayoutV2.vue';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

defineProps<{
    mustVerifyEmail?: boolean;
    status?: string;
}>();

const photoInputRef = ref<HTMLInputElement | null>(null);

function clickAvatarInput() {
    if (photoInputRef?.value) {
        photoInputRef.value.click();
    }
}
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayoutV2 header-text="My account">
        <form>
            <div class="space-y-12">
                <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Profile
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>

                    <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div class="grid gap-2 sm:col-span-4">
                            <Label for="website">Website</Label>
                            <Input id="website" name="website" placeholder="www.example.com" required type="text" />
                        </div>

                        <div class="col-span-full grid gap-2">
                            <Label for="about">About</Label>
                            <Textarea id="about" name="about" rows="3" />
                            <p class="text-sm leading-6 text-muted-foreground">
                                Write a few sentences about yourself.
                            </p>
                        </div>

                        <div class="col-span-full grid gap-2">
                            <Label for="photo">Photo</Label>
                            <div class="mt-2 flex items-center gap-x-3">
                                <Avatar class="size-12" shape="square">
                                    <AvatarImage alt="@radix-vue" src="https://github.com/radix-vue.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                    <span class="sr-only">Toggle user menu</span>
                                </Avatar>
                                <input ref="photoInputRef" class="hidden" name="profile photo" type="file">
                                <Button type="button" variant="outline" @click="clickAvatarInput">
                                    Change
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Personal Information
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">
                            Use a permanent address where you can receive mail.
                        </p>
                    </div>

                    <div class="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
                        <div class="sm:col-span-3">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="first-name">First name</label>
                            <div class="mt-2">
                                <input id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="first-name" type="text">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="last-name">Last name</label>
                            <div class="mt-2">
                                <input id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="last-name" type="text">
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="email">Email address</label>
                            <div class="mt-2">
                                <input id="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="email" type="email">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="country">Country</label>
                            <div class="mt-2">
                                <select id="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" name="country">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="street-address">Street address</label>
                            <div class="mt-2">
                                <input id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="street-address" type="text">
                            </div>
                        </div>

                        <div class="sm:col-span-2 sm:col-start-1">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="city">City</label>
                            <div class="mt-2">
                                <input id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="city" type="text">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="region">State / Province</label>
                            <div class="mt-2">
                                <input id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="region" type="text">
                            </div>
                        </div>

                        <div class="sm:col-span-2">
                            <label class="block text-sm font-medium leading-6 text-gray-900" for="postal-code">ZIP / Postal code</label>
                            <div class="mt-2">
                                <input id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" name="postal-code" type="text">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
                    <div>
                        <h2 class="text-base font-semibold leading-7 text-gray-900">
                            Notifications
                        </h2>
                        <p class="mt-1 text-sm leading-6 text-gray-600">
                            We'll always let you know about important changes, but you pick what else you want to hear about.
                        </p>
                    </div>

                    <div class="max-w-2xl space-y-10 md:col-span-2">
                        <fieldset>
                            <legend class="text-sm font-semibold leading-6 text-gray-900">
                                By Email
                            </legend>
                            <div class="mt-6 space-y-6">
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="comments" class="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" name="comments" type="checkbox">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label class="font-medium text-gray-900" for="comments">Comments</label>
                                        <p class="text-gray-500">
                                            Get notified when someones posts a comment on a posting.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="candidates" class="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" name="candidates" type="checkbox">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label class="font-medium text-gray-900" for="candidates">Candidates</label>
                                        <p class="text-gray-500">
                                            Get notified when a candidate applies for a job.
                                        </p>
                                    </div>
                                </div>
                                <div class="relative flex gap-x-3">
                                    <div class="flex h-6 items-center">
                                        <input id="offers" class="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" name="offers" type="checkbox">
                                    </div>
                                    <div class="text-sm leading-6">
                                        <label class="font-medium text-gray-900" for="offers">Offers</label>
                                        <p class="text-gray-500">
                                            Get notified when a candidate accepts or rejects an offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend class="text-sm font-semibold leading-6 text-gray-900">
                                Push Notifications
                            </legend>
                            <p class="mt-1 text-sm leading-6 text-gray-600">
                                These are delivered via SMS to your mobile phone.
                            </p>
                            <div class="mt-6 space-y-6">
                                <div class="flex items-center gap-x-3">
                                    <input id="push-everything" class="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" name="push-notifications" type="radio">
                                    <label class="block text-sm font-medium leading-6 text-gray-900" for="push-everything">Everything</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="push-email" class="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" name="push-notifications" type="radio">
                                    <label class="block text-sm font-medium leading-6 text-gray-900" for="push-email">Same as email</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="push-nothing" class="size-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" name="push-notifications" type="radio">
                                    <label class="block text-sm font-medium leading-6 text-gray-900" for="push-nothing">No push notifications</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
                <button class="text-sm font-semibold leading-6 text-gray-900" type="button">
                    Cancel
                </button>
                <button class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">
                    Save
                </button>
            </div>
        </form>
    </AuthenticatedLayoutV2>
</template>
