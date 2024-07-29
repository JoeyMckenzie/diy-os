<?php

declare(strict_types=1);

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Override;

final class Project extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return Project[]
     */
    #[Override]
    public function toArray(Request $request): array
    {
        /** @var Project[] $projects */
        $projects = parent::toArray($request);

        return $projects;
    }
}
