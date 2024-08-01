<?php

declare(strict_types=1);

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

final class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $testUser1 = User::factory()->create([
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
        ]);

        $testUser2 = User::factory()->create([
            'first_name' => 'Test',
            'last_name' => 'User',
            'email' => 'testuser1@gmail.com',
            'password' => Hash::make('password'),
        ]);

        Project::factory(5)->create([
            'user_id' => $testUser1->id,
        ]);

        Project::factory(5)->create([
            'user_id' => $testUser2->id,
        ]);

        Order::factory(100)->create([
            'user_id' => $testUser1->id,
        ]);

        Order::factory(100)->create([
            'user_id' => $testUser2->id,
        ]);
    }
}
