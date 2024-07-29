<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\MaterialFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

final class Material extends Model
{
    /**
     * @use HasFactory<MaterialFactory>
     */
    use HasFactory;

    /**
     * @return BelongsTo<User, Material>
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
