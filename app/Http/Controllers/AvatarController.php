<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Http\Requests\AvatarStoreRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

final class AvatarController extends Controller
{
    public function store(AvatarStoreRequest $request): RedirectResponse
    {
        $request->validated();
        $file = $request->file('avatar');
        dd($file);

        return Redirect::route('profile.edit');
    }
}
