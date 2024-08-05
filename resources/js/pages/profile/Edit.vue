<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import UpdatePasswordForm from './partials/UpdatePasswordForm.vue';
import AuthenticatedLayoutV2 from '@/layouts/AuthenticatedLayoutV2.vue';
import UpdateProfileInformationForm from '@/pages/profile/partials/UpdateProfileInformationForm.vue';
import DeleteUserForm from '@/pages/profile/partials/DeleteUserForm.vue';

defineProps<{
    mustVerifyEmail?: boolean;
    status?: string;
}>();
</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayoutV2 header-text="My account">
        <form>
            <div class="space-y-12">
                <UpdateProfileInformationForm :must-verify-email="mustVerifyEmail" :status="status" />
                <UpdatePasswordForm />
                <DeleteUserForm />
            </div>
        </form>
    </AuthenticatedLayoutV2>
</template>
