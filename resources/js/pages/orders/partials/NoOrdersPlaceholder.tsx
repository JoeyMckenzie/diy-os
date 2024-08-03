import { PlusIcon } from '@heroicons/react/20/solid';
import { Button } from '@/components/catalyst/button';
import { Heading } from '@/components/catalyst/heading';
import { Text } from '@/components/catalyst/text';

export function NoProjectsPlaceholder() {
    return (
        <div className="py-24 text-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mx-auto size-12 text-zinc-400 dark:text-zinc-700"
            >
                <title>Add an order</title>
                <path
                    fillRule="evenodd"
                    d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V10.5Z"
                    clipRule="evenodd"
                />
            </svg>
            <Heading>No orders</Heading>
            <Text>Get started by adding an order to a project.</Text>
            <div className="mt-6">
                <Button href={route('projects.create')}>
                    <PlusIcon
                        aria-hidden="true"
                        className="-ml-0.5 mr-1.5 size-5"
                    />
                    New Order
                </Button>
            </div>
        </div>
    );
}
