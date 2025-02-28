<?php

declare(strict_types=1);

use App\Enums\ProjectStatus;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table): void {
            $table->id();
            $table->timestamps();
            $table->string('title');
            $table->string('description');
            $table->string('cover_image')->nullable();
            $table->decimal('budget')->nullable();
            $table->date('target_completion_date')->nullable();
            $table->enum('status', ProjectStatus::toArray());
            $table->foreignIdFor(User::class)->constrained()->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
