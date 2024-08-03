import { Heading } from '@/components/catalyst/heading';
import { Text } from '@/components/catalyst/text';

const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
];

export function Stats() {
    return (
        <div>
            <Heading className="text-base font-semibold leading-6">
                Last 30 days
            </Heading>
            <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                {stats.map(item => (
                    <Text
                        key={item.name}
                        className="overflow-hidden rounded-lg px-4 py-5 shadow sm:p-6"
                    >
                        <dt className="truncate text-sm font-medium">
                            {item.name}
                        </dt>
                        <dd className="mt-1 text-3xl font-semibold tracking-tight">
                            {item.stat}
                        </dd>
                    </Text>
                ))}
            </dl>
        </div>
    );
}
