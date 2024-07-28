<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Project extends Model
{
    /**
     * @use HasFactory<ProjectFactory>
     */
    use HasFactory;
}
