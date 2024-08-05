<script lang='ts' setup>
import { Link } from '@inertiajs/vue3';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Project } from '@/lib/models';

defineProps<{
    project: Project;
}>();
</script>

<template>
    <Card class="flex flex-col">
        <CardHeader>
            <CardTitle>{{ project.title }}</CardTitle>
        </CardHeader>
        <CardContent class="text-muted-foreground">
            {{ project.description }}
        </CardContent>
        <CardFooter class="mt-auto">
            <Link :href="route('projects.show', project.id)">
                <Button>View</Button>
            </Link>
        </CardFooter>
    </Card>
</template>
