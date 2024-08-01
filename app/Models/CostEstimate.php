<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\CostEstimateFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class CostEstimate extends Model
{
    /**
     * @use HasFactory<CostEstimateFactory>
     */
    use HasFactory;
}
