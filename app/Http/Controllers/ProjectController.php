<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

final class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = request()->user()?->projects()->paginate(10);

        return Inertia::render('projects/Index', [
            'projects' => $projects,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('projects/Create');
    }

    public function show(Project $project): Response
    {
        return Inertia::render('projects/Show', [
            'project' => $project,
        ]);
    }

    public function destroy(Project $project): RedirectResponse
    {
        $project->delete();

        return redirect()->route('projects.index');
    }
}
