<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\AvatarManager;
use App\Models\User;
use Hashids\Hashids;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

final class DiskAvatarManager implements AvatarManager
{
    public function uploadAvatarForUser(User $user, UploadedFile $image): void
    {
        $existingAvatar = $user->avatar;

        if ($user->avatar !== null) {
            Log::info("Removing existing avatar for user $user->id");
            Storage::delete($user->avatar);
        }

        Log::info("Uploading avatar for user $user->id");

        $fileName = $image->getFilename();
        $extension = $image->getClientOriginalExtension();
        $hasher = new Hashids('', 10);
        $userHashId = $hasher->encode($user->id);
        $filePath = "avatars/$userHashId/$fileName.$extension";
        $contents = $image->getContent();

        Storage::disk('public')->put($filePath, $contents);

        Log::info("Avatar successfully uploaded for user $user->id, updating file path in database");

        $user->avatar = $filePath;
        $user->save();

        Log::info("Avatar successfully saved for user $user->id");
    }
}
