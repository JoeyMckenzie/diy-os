<?php

declare(strict_types=1);

use App\Http\Controllers\MaterialController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

Route::get('/', fn () => Inertia::render('landing/Index', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
]))->name('welcome');

Route::middleware(['auth', 'verified'])->group(fn () => Route::resources([
    'projects' => ProjectController::class,
    'orders' => OrderController::class,
    'materials' => MaterialController::class,
]));

Route::get('/dashboard', fn () => Inertia::render('dashboard/Index'))->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function (): void {
    Route::get('/profile', fn (Illuminate\Http\Request $request): Response => (new ProfileController)->edit($request))->name('profile.edit');
    Route::patch('/profile', fn (App\Http\Requests\ProfileUpdateRequest $request): RedirectResponse => (new ProfileController)->update($request))->name('profile.update');
    Route::delete('/profile', fn (Illuminate\Http\Request $request): RedirectResponse => (new ProfileController)->destroy($request))->name('profile.destroy');
});

require __DIR__.'/auth.php';
