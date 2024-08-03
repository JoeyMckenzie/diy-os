<script lang="ts" setup>
import type { PageProps } from '../../types';
import AuthenticatedLayout from '../../layouts/AuthenticatedLayout.vue';

defineProps<
    PageProps<{
        total: number;
        metadata: { completed: number; inProgress: number; notStarted: number };
    }>
>();
</script>

<template>
    <AuthenticatedLayout />
</template>

<style scoped>

</style>
