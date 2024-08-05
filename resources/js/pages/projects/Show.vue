<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import type { Project } from '@/lib/models';

defineProps<{
    project: Project;
}>();
</script>

<template>
    <AuthenticatedLayout :header-text="project.title">
        <Head :title="project.title" />
    </AuthenticatedLayout>
</template>
