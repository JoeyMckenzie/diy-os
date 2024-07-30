<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
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

    public function findProject(Request $request): JsonResponse
    {
        $request->query('search');

        return response()->json([
            'foo' => 'bar',
        ]);
    }
}
