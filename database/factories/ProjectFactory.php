<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\ProjectStatus;
use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;
use Override;

/**
 * @extends Factory<Project>
 */
final class ProjectFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    #[Override]
    public function definition(): array
    {
        return [
            'title' => $this->faker->text(20),
            'description' => $this->faker->text(),
            'status' => $this->faker->randomElement(ProjectStatus::toArray()),
            'budget' => $this->faker->randomFloat(2, 100, 10000),
            'target_completion_date' => $this->faker->dateTimeBetween('now', '+2 years'),
        ];
    }
}
