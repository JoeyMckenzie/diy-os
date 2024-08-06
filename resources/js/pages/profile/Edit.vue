<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import UpdatePasswordForm from './partials/UpdatePasswordForm.vue';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import UpdateProfileInformationForm from '@/pages/profile/partials/UpdateProfileInformationForm.vue';
import DeleteUserForm from '@/pages/profile/partials/DeleteUserForm.vue';

defineProps<{
    mustVerifyEmail?: boolean;
    status?: string;
}>();
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout header-text="My account">
        <form class="mt-8">
            <div class="space-y-12">
                <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
                <UpdatePasswordForm />
                <DeleteUserForm />
            </div>
        </form>
    </AuthenticatedLayout>
</template>
