<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\AvatarManager;
use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

final class ProfileController extends Controller
{
    private readonly AvatarManager $avatarManager;

    public function __construct(AvatarManager $avatarManager)
    {
        $this->avatarManager = $avatarManager;
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        /** @var User|null|MustVerifyEmail $mustVerifyEmail */
        $mustVerifyEmail = $request->user();

        return Inertia::render('profile/Edit', [
            'mustVerifyEmail' => $mustVerifyEmail instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        if (is_null($request->user())) {
            abort(401);
        }

        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        if ($request->hasFile('avatar') && request()->user() !== null) {
            /** @var UploadedFile $file */
            $file = $request->file('avatar');
            $this->avatarManager->uploadAvatarForUser(request()->user(), $file);
        }

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user?->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
