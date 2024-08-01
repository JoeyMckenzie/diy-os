<?php

declare(strict_types=1);

namespace App\Models;

use Database\Factories\DocumentFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

final class Document extends Model
{
    /**
     * @use HasFactory<DocumentFactory>
     */
    use HasFactory;
}
