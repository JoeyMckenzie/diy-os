import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";

const stats = [
    {
        name: "Total Subscribers",
        stat: "71,897",
        previousStat: "70,946",
        change: "12%",
        changeType: "increase",
    },
    {
        name: "Avg. Open Rate",
        stat: "58.16%",
        previousStat: "56.14%",
        change: "2.02%",
        changeType: "increase",
    },
    {
        name: "Avg. Click Rate",
        stat: "24.57%",
        previousStat: "28.62%",
        change: "4.05%",
        changeType: "decrease",
    },
];

export function DashboardStats() {
    return (
        <div>
            <dl className="mt-5 grid grid-cols-1 divide-y divide-zinc-200 overflow-hidden rounded-lg shadow md:grid-cols-3 md:divide-x md:divide-y-0 dark:divide-zinc-800">
                {stats.map((item) => (
                    <div key={item.name} className="px-4 py-5 sm:p-6">
                        <dt className="font-normal text-base text-zinc-900 dark:text-zinc-100">
                            {item.name}
                        </dt>
                        <dd className="mt-1 flex items-baseline justify-between md:block lg:flex">
                            <div className="flex items-baseline font-semibold text-2xl text-zinc-600 dark:text-zinc-300">
                                {item.stat}
                                <span className="ml-2 font-medium text-sm text-zinc-500 dark:text-zinc-400">
                                    from {item.previousStat}
                                </span>
                            </div>

                            <div
                                className={clsx(
                                    item.changeType === "increase"
                                        ? "bg-green-100 text-green-800"
                                        : "bg-red-100 text-red-800",
                                    "inline-flex items-baseline rounded-full px-2.5 py-0.5 font-medium text-sm lg:mt-0 md:mt-2",
                                )}
                            >
                                {item.changeType === "increase" ? (
                                    <ArrowUpIcon
                                        aria-hidden="true"
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500"
                                    />
                                ) : (
                                    <ArrowDownIcon
                                        aria-hidden="true"
                                        className="-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500"
                                    />
                                )}

                                <span className="sr-only">
                                    {" "}
                                    {item.changeType === "increase"
                                        ? "Increased"
                                        : "Decreased"}{" "}
                                    by{" "}
                                </span>
                                {item.change}
                            </div>
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
