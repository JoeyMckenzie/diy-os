import { Avatar } from "@/components/catalyst/avatar";
import { Badge } from "@/components/catalyst/badge";
import {
    Dropdown,
    DropdownButton,
    DropdownItem,
    DropdownMenu,
} from "@/components/catalyst/dropdown";
import { Heading, Subheading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const statuses = {
    Paid: "text-green-700 bg-green-50 ring-green-600/20",
    Withdraw: "text-zinc-600 bg-zinc-50 ring-zinc-500/10",
    Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
    {
        id: 1,
        name: "Tuple",
        imageUrl: "https://tailwindui.com/img/logos/48x48/tuple.svg",
        lastInvoice: {
            date: "December 13, 2022",
            dateTime: "2022-12-13",
            amount: "$2,000.00",
            status: "Overdue",
        },
    },
    {
        id: 2,
        name: "SavvyCal",
        imageUrl: "https://tailwindui.com/img/logos/48x48/savvycal.svg",
        lastInvoice: {
            date: "January 22, 2023",
            dateTime: "2023-01-22",
            amount: "$14,000.00",
            status: "Paid",
        },
    },
    {
        id: 3,
        name: "Reform",
        imageUrl: "https://tailwindui.com/img/logos/48x48/reform.svg",
        lastInvoice: {
            date: "January 23, 2023",
            dateTime: "2023-01-23",
            amount: "$7,600.00",
            status: "Paid",
        },
    },
];

export function ProjectsDisplayList() {
    return (
        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 xl:gap-x-8">
            {clients.map((client) => (
                <li
                    key={client.id}
                    className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800"
                >
                    <div className="flex items-center justify-between gap-x-4 border-zinc-900/5 border-b bg-zinc-50 p-6 dark:bg-zinc-800">
                        <Avatar
                            alt={client.name}
                            src={client.imageUrl}
                            square
                        />
                        <Heading>{client.name}</Heading>
                        <Dropdown>
                            <DropdownButton plain>
                                <EllipsisHorizontalIcon />
                            </DropdownButton>
                            <DropdownMenu>
                                <DropdownItem href="/users/1">
                                    View
                                </DropdownItem>
                                <DropdownItem href="/users/1/edit">
                                    Edit
                                </DropdownItem>
                                <DropdownItem>Delete</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <dl className="-my-3 divide-y divide-zinc-100 px-6 py-4 text-sm leading-6 dark:divide-zinc-700">
                        <div className="flex justify-between gap-x-4 py-3">
                            <dt>
                                <Subheading>Last invoice</Subheading>
                            </dt>
                            <dd className="text-zinc-700">
                                <time dateTime={client.lastInvoice.dateTime}>
                                    <Text>{client.lastInvoice.date}</Text>
                                </time>
                            </dd>
                        </div>
                        <div className="flex justify-between gap-x-4 py-3">
                            <Subheading>Amount</Subheading>
                            <dd className="flex items-start gap-x-2">
                                <Text>{client.lastInvoice.amount}</Text>
                                <Badge color="cyan">
                                    {client.lastInvoice.status}
                                </Badge>
                            </dd>
                        </div>
                    </dl>
                </li>
            ))}
        </ul>
    );
}
