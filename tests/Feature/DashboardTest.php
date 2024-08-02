<?php

declare(strict_types=1);

namespace Tests;

it('visiting the root route redirects to the dashboard', function (): void {
    $response = $this->get('/');
    $response->assertStatus(302);
    $response->assertRedirect('/dashboard');
});
