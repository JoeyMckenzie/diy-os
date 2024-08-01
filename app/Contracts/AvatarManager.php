<?php

declare(strict_types=1);

namespace App\Contracts;

use App\Models\User;
use Illuminate\Http\UploadedFile;

interface AvatarManager
{
    public function uploadAvatarForUser(User $user, UploadedFile $image): void;
}
