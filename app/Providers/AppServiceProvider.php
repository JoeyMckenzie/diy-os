<?php

declare(strict_types=1);

namespace App\Providers;

use App\Contracts\AvatarManager;
use App\Services\DiskAvatarManager;
use Illuminate\Support\ServiceProvider;
use Override;

final class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    #[Override]
    public function register(): void
    {
        $this->app->singleton(AvatarManager::class, DiskAvatarManager::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
