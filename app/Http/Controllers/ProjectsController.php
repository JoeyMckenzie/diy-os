<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

final class ProjectsController extends Controller
{
    public function index(): Response
    {
        $projects = request()->user()?->projects()->get();

        return Inertia::render('projects/Index', [
            'projects' => $projects,
        ]);
    }
}
