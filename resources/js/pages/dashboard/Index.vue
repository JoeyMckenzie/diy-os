<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';
import { Activity, ArrowUpRight, CreditCard, DollarSign, Users } from 'lucide-vue-next';
import AuthenticatedLayoutV2 from '@/layouts/AuthenticatedLayoutV2.vue';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
</script>

<template>
    <AuthenticatedLayoutV2 :header-text="`Welcome ${$page.props.auth.user.first_name}!`">
        <Head title="Dashboard" />
        <template #breadcrumb>
            <Breadcrumb class="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <a href="#">Dashboard</a>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink as-child>
                            <a href="#">Orders</a>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Recent Orders</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </template>
        <main class="flex flex-1 flex-col gap-4 md:gap-8">
            <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">
                            Total Revenue
                        </CardTitle>
                        <DollarSign class="size-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            $45,231.89
                        </div>
                        <p class="text-xs text-muted-foreground">
                            +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">
                            Subscriptions
                        </CardTitle>
                        <Users class="size-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            +2350
                        </div>
                        <p class="text-xs text-muted-foreground">
                            +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">
                            Sales
                        </CardTitle>
                        <CreditCard class="size-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            +12,234
                        </div>
                        <p class="text-xs text-muted-foreground">
                            +19% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle class="text-sm font-medium">
                            Active Now
                        </CardTitle>
                        <Activity class="size-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            +573
                        </div>
                        <p class="text-xs text-muted-foreground">
                            +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>
            <Card>
                <CardHeader class="flex flex-row items-center">
                    <div class="grid gap-2">
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent transactions from your store.
                        </CardDescription>
                    </div>
                    <Button as-child class="ml-auto gap-1" size="sm">
                        <a href="#">
                            View All
                            <ArrowUpRight class="size-4" />
                        </a>
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Customer</TableHead>
                                <TableHead class="hidden xl:table-column">
                                    Type
                                </TableHead>
                                <TableHead class="hidden xl:table-column">
                                    Status
                                </TableHead>
                                <TableHead class="hidden xl:table-column">
                                    Date
                                </TableHead>
                                <TableHead class="text-right">
                                    Amount
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <div class="font-medium">
                                        Liam Johnson
                                    </div>
                                    <div class="hidden text-sm text-muted-foreground md:inline">
                                        liam@example.com
                                    </div>
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    Sale
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    <Badge class="text-xs" variant="outline">
                                        Approved
                                    </Badge>
                                </TableCell>
                                <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                                    2023-06-23
                                </TableCell>
                                <TableCell class="text-right">
                                    $250.00
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div class="font-medium">
                                        Olivia Smith
                                    </div>
                                    <div class="hidden text-sm text-muted-foreground md:inline">
                                        olivia@example.com
                                    </div>
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    Refund
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    <Badge class="text-xs" variant="outline">
                                        Declined
                                    </Badge>
                                </TableCell>
                                <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                                    2023-06-24
                                </TableCell>
                                <TableCell class="text-right">
                                    $150.00
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div class="font-medium">
                                        Noah Williams
                                    </div>
                                    <div class="hidden text-sm text-muted-foreground md:inline">
                                        noah@example.com
                                    </div>
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    Subscription
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    <Badge class="text-xs" variant="outline">
                                        Approved
                                    </Badge>
                                </TableCell>
                                <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                                    2023-06-25
                                </TableCell>
                                <TableCell class="text-right">
                                    $350.00
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div class="font-medium">
                                        Emma Brown
                                    </div>
                                    <div class="hidden text-sm text-muted-foreground md:inline">
                                        emma@example.com
                                    </div>
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    Sale
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    <Badge class="text-xs" variant="outline">
                                        Approved
                                    </Badge>
                                </TableCell>
                                <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                                    2023-06-26
                                </TableCell>
                                <TableCell class="text-right">
                                    $450.00
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>
                                    <div class="font-medium">
                                        Liam Johnson
                                    </div>
                                    <div class="hidden text-sm text-muted-foreground md:inline">
                                        liam@example.com
                                    </div>
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    Sale
                                </TableCell>
                                <TableCell class="hidden xl:table-column">
                                    <Badge class="text-xs" variant="outline">
                                        Approved
                                    </Badge>
                                </TableCell>
                                <TableCell class="hidden md:table-cell lg:hidden xl:table-column">
                                    2023-06-27
                                </TableCell>
                                <TableCell class="text-right">
                                    $550.00
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </main>
    </AuthenticatedLayoutV2>
</template>
