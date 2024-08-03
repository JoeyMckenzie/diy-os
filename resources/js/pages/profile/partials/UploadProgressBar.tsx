import { Text } from '@/components/catalyst/text';

export function UploadProgressBar({ value }: { value: number }) {
    const width = `${value}%`;

    return (
        <div>
            <Text className="sr-only">Status</Text>
            <Text>Uploading avatar...</Text>
            <div aria-hidden="true">
                <div className="overflow-hidden rounded-full bg-gray-200">
                    <div
                        style={{ width }}
                        className="h-2 rounded-full bg-blue-600"
                    />
                </div>
            </div>
        </div>
    );
}
