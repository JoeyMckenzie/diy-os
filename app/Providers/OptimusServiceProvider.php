<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Jenssegers\Optimus\Optimus;
use Override;

final class OptimusServiceProvider extends ServiceProvider
{
    public const int LARGE_PRIME_NUMBER = 2147483629;

    private const int INVERSE_PRIME = 119304647;

    private const int LARGE_RANDOM_INTEGER = 1954856279;

    #[Override]
    public function register(): void
    {
        $this->app->singleton(Optimus::class, fn (): \Jenssegers\Optimus\Optimus => new Optimus(self::LARGE_PRIME_NUMBER, self::INVERSE_PRIME, self::LARGE_RANDOM_INTEGER));
    }
}
