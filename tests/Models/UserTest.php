<?php

declare(strict_types=1);

namespace Tests;

use App\Models\User;

test('profile page is displayed', function (): void {
    // Arrange
    $user = User::factory()->create([
        'first_name' => 'First',
        'last_name' => 'Last',
    ]);

    // Act
    $initials = $user->initials;

    // Assert
    expect($initials)->toBe('FL');
});
