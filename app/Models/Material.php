<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\MaterialFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Material extends Model
{
    /**
     * @use HasFactory<MaterialFactory>
     */
    use HasFactory;
}
