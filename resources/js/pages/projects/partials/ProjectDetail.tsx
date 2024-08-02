import { clsx } from "clsx";

const secondaryNavigation = [
    { name: "Overview", href: "#", current: true },
    { name: "Activity", href: "#", current: false },
    { name: "Settings", href: "#", current: false },
    { name: "Collaborators", href: "#", current: false },
    { name: "Notifications", href: "#", current: false },
];
const stats = [
    { name: "Number of deploys", value: "405" },
    { name: "Average deploy time", value: "3.65", unit: "mins" },
    { name: "Number of servers", value: "3" },
    { name: "Success rate", value: "98.5%" },
];
const statuses = {
    Completed: "text-green-400 bg-green-400/10",
    Error: "text-rose-400 bg-rose-400/10",
};
const activityItems = [
    {
        user: {
            name: "Michael Foster",
            imageUrl:
                "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
        commit: "2d89f0c8",
        branch: "main",
        status: "Completed",
        duration: "25s",
        date: "45 minutes ago",
        dateTime: "2023-01-23T11:00",
    },
    // More items...
];

export function ProjectDetail() {
    return (
        <main>
            <header>
                {/* Secondary navigation */}
                <nav className="flex overflow-x-auto border-white/10 border-b py-4">
                    <ul className="flex min-w-full flex-none gap-x-6 px-4 font-semibold text-gray-400 text-sm leading-6 lg:px-8 sm:px-6">
                        {secondaryNavigation.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    className={
                                        item.current ? "text-indigo-400" : ""
                                    }
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Heading */}
                <div className="flex flex-col items-start justify-between gap-x-8 gap-y-4 bg-gray-700/10 px-4 py-4 sm:flex-row sm:items-center lg:px-8 sm:px-6">
                    <div>
                        <div className="flex items-center gap-x-3">
                            <div className="flex-none rounded-full bg-green-400/10 p-1 text-green-400">
                                <div className="h-2 w-2 rounded-full bg-current" />
                            </div>
                            <h1 className="flex gap-x-3 text-base leading-7">
                                <span className="font-semibold text-white">
                                    Planetaria
                                </span>
                                <span className="text-gray-600">/</span>
                                <span className="font-semibold text-white">
                                    mobile-api
                                </span>
                            </h1>
                        </div>
                        <p className="mt-2 text-gray-400 text-xs leading-6">
                            Deploys from GitHub via main branch
                        </p>
                    </div>
                    <div className="order-first flex-none rounded-full bg-indigo-400/10 px-2 py-1 font-medium text-indigo-400 text-xs ring-1 ring-indigo-400/30 ring-inset sm:order-none">
                        Production
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 bg-gray-700/10 lg:grid-cols-4 sm:grid-cols-2">
                    {stats.map((stat, statIdx) => (
                        <div
                            key={stat.name}
                            className={clsx(
                                statIdx % 2 === 1
                                    ? "sm:border-l"
                                    : statIdx === 2
                                      ? "lg:border-l"
                                      : "",
                                "border-white/5 border-t px-4 py-6 lg:px-8 sm:px-6",
                            )}
                        >
                            <p className="font-medium text-gray-400 text-sm leading-6">
                                {stat.name}
                            </p>
                            <p className="mt-2 flex items-baseline gap-x-2">
                                <span className="font-semibold text-4xl text-white tracking-tight">
                                    {stat.value}
                                </span>
                                {stat.unit ? (
                                    <span className="text-gray-400 text-sm">
                                        {stat.unit}
                                    </span>
                                ) : null}
                            </p>
                        </div>
                    ))}
                </div>
            </header>

            {/* Activity list */}
            <div className="border-white/10 border-t pt-11">
                <h2 className="px-4 font-semibold text-base text-white leading-7 lg:px-8 sm:px-6">
                    Latest activity
                </h2>
                <table className="mt-6 w-full whitespace-nowrap text-left">
                    <colgroup>
                        <col className="w-full sm:w-4/12" />
                        <col className="lg:w-4/12" />
                        <col className="lg:w-2/12" />
                        <col className="lg:w-1/12" />
                        <col className="lg:w-1/12" />
                    </colgroup>
                    <thead className="border-white/10 border-b text-sm text-white leading-6">
                        <tr>
                            <th
                                scope="col"
                                className="py-2 pr-8 pl-4 font-semibold lg:pl-8 sm:pl-6"
                            >
                                User
                            </th>
                            <th
                                scope="col"
                                className="hidden py-2 pr-8 pl-0 font-semibold sm:table-cell"
                            >
                                Commit
                            </th>
                            <th
                                scope="col"
                                className="py-2 pr-4 pl-0 text-right font-semibold lg:pr-20 sm:pr-8 sm:text-left"
                            >
                                Status
                            </th>
                            <th
                                scope="col"
                                className="hidden py-2 pr-8 pl-0 font-semibold md:table-cell lg:pr-20"
                            >
                                Duration
                            </th>
                            <th
                                scope="col"
                                className="hidden py-2 pr-4 pl-0 text-right font-semibold sm:table-cell lg:pr-8 sm:pr-6"
                            >
                                Deployed at
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {activityItems.map((item) => (
                            <tr key={item.commit}>
                                <td className="py-4 pr-8 pl-4 lg:pl-8 sm:pl-6">
                                    <div className="flex items-center gap-x-4">
                                        <img
                                            alt=""
                                            src={item.user.imageUrl}
                                            className="h-8 w-8 rounded-full bg-gray-800"
                                        />
                                        <div className="truncate font-medium text-sm text-white leading-6">
                                            {item.user.name}
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 pl-0 sm:table-cell sm:pr-8">
                                    <div className="flex gap-x-3">
                                        <div className="font-mono text-gray-400 text-sm leading-6">
                                            {item.commit}
                                        </div>
                                        <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 font-medium text-gray-400 text-xs ring-1 ring-gray-400/20 ring-inset">
                                            {item.branch}
                                        </span>
                                    </div>
                                </td>
                                <td className="py-4 pr-4 pl-0 text-sm leading-6 lg:pr-20 sm:pr-8">
                                    <div className="flex items-center justify-end gap-x-2 sm:justify-start">
                                        <time
                                            dateTime={item.dateTime}
                                            className="text-gray-400 sm:hidden"
                                        >
                                            {item.date}
                                        </time>
                                        <div
                                            className={clsx(
                                                statuses[item.status],
                                                "flex-none rounded-full p-1",
                                            )}
                                        >
                                            <div className="h-1.5 w-1.5 rounded-full bg-current" />
                                        </div>
                                        <div className="hidden text-white sm:block">
                                            {item.status}
                                        </div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-8 pl-0 text-gray-400 text-sm leading-6 md:table-cell lg:pr-20">
                                    {item.duration}
                                </td>
                                <td className="hidden py-4 pr-4 pl-0 text-right text-gray-400 text-sm leading-6 sm:table-cell lg:pr-8 sm:pr-6">
                                    <time dateTime={item.dateTime}>
                                        {item.date}
                                    </time>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}
