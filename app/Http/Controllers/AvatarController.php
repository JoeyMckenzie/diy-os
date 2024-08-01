<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\AvatarManager;
use App\Http\Requests\AvatarStoreRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Redirect;

final class AvatarController extends Controller
{
    private readonly AvatarManager $avatarManager;

    public function __construct(AvatarManager $avatarManager)
    {
        $this->avatarManager = $avatarManager;
    }

    public function store(AvatarStoreRequest $request): RedirectResponse
    {
        if ($request->user() === null) {
            abort(401);
        }

        $request->validated();

        /** @var UploadedFile $file */
        $file = $request->file('avatar');
        $this->avatarManager->uploadAvatarForUser($request->user(), $file);

        return Redirect::route('profile.edit');
    }
}
