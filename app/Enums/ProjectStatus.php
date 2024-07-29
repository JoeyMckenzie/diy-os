<?php

declare(strict_types=1);

namespace App\Enums;

enum ProjectStatus: string
{
    case TODO = 'todo';

    case IN_PROGRESS = 'in progress';

    case COMPLETED = 'completed';

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
