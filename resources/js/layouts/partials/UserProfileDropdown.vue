<script lang="ts" setup>
import { LogOut } from 'lucide-vue-next';
import { AvatarIcon, GithubLogoIcon, QuestionMarkCircledIcon } from '@radix-icons/vue';
import { Link } from '@inertiajs/vue3';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Avatar class="size-8">
                <AvatarImage alt="@radix-vue" src="https://github.com/radix-vue.png" />
                <AvatarFallback>CN</AvatarFallback>
                <span class="sr-only">Toggle user menu</span>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <Link :href="route('profile.edit')">
                    <DropdownMenuItem>
                        <AvatarIcon class="mr-2" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <GithubLogoIcon class="mr-2" />
                <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <QuestionMarkCircledIcon class="mr-2" />
                <span>Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <Link
                :href="route('logout')"
                as="button"
                class="w-full"
                method="post"
            >
                <DropdownMenuItem>
                    <LogOut class="mr-2 size-4" />
                    <span>Log out</span>
                </DropdownMenuItem>
            </Link>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
