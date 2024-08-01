<?php

declare(strict_types=1);

use App\Http\Controllers\AvatarController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::post('/avatar', [AvatarController::class, 'store'])->name('avatar.store');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
