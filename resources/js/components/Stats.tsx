const stats = [
    { name: "Total Subscribers", stat: "71,897" },
    { name: "Avg. Open Rate", stat: "58.16%" },
    { name: "Avg. Click Rate", stat: "24.57%" },
];

export function Stats() {
    return (
        <div>
            <h3 className="font-semibold text-base leading-6">Last 30 days</h3>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map((item) => (
                    <div
                        key={item.name}
                        className="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6"
                    >
                        <dt className="truncate font-medium text-sm">
                            {item.name}
                        </dt>
                        <dd className="mt-1 font-semibold text-3xl tracking-tight">
                            {item.stat}
                        </dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
