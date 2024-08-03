<script lang="ts" setup>
import { route } from 'ziggy-js';
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
            <Avatar>
                <AvatarImage alt="@radix-vue" src="https://github.com/radix-vue.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
                <Link :href="route('profile.edit')">
                    <DropdownMenuItem>
                        Profile
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <span>GitHub</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
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
                    Log out
                </DropdownMenuItem>
            </Link>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
