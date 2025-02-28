<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectStatus: string
{
    case NOT_STARTED = 'Not Started';

    case IN_PROGRESS = 'In Progress';

    case COMPLETED = 'Completed';

    case CANCELLED = 'Cancelled';

    /**
     * @return string[]
     */
    public static function toArray(): array
    {
        /** @var string[] $statuses */
        $statuses = collect(self::cases())
            ->map(fn (ProjectStatus $status) => $status->value)
            ->toArray();

        return $statuses;
    }
}
