<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import ProjectSummaryCard from './partials/ProjectSummaryCard.vue';
import AuthenticatedLayout from '@/layouts/AuthenticatedLayout.vue';
import type { PaginatedModel, Project } from '@/lib/models';

defineProps<{
    projects: PaginatedModel<Project>;
}>();
</script>

<template>
    <AuthenticatedLayout header-text="Projects">
        <Head title="Projects" />
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ProjectSummaryCard v-for="project in projects.data" :key="project.id" :project="project" />
        </div>
    </AuthenticatedLayout>
</template>
