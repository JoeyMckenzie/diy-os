<?php

declare(strict_types=1);

namespace App\Enums;

enum OrderStatus: string
{
    case DRAFT = 'Draft';

    case ORDERED = 'Ordered';

    case COMPLETED = 'Completed';

    case CANCELLED = 'Cancelled';

    /**
     * @return string[]
     */
    public static function toArray(): array
    {
        /** @var string[] $statuses */
        $statuses = collect(self::cases())
            ->map(fn (OrderStatus $status) => $status->value)
            ->toArray();

        return $statuses;
    }
}
