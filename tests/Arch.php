<?php

declare(strict_types=1);

namespace Tests;

arch('All source files are strictly typed')
    ->expect('App\\')
    ->toUseStrictTypes();

// arch('All test files are strictly typed')
//     ->expect('Tests\\')
//     ->toUseStrictTypes();

arch('All enums are string backed')
    ->expect('App\\Enums\\')
    ->toBeStringBackedEnums();

arch('All value objects are immutable')
    ->expect('App\\ValueObjects\\')
    ->toBeReadonly()
    ->and('App\\ValueObjects')
    ->toBeFinal();
