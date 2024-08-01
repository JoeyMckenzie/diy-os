<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\AvatarManager;
use App\Models\User;
use Hashids\Hashids;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Psr\Log\LoggerInterface;

final readonly class DiskAvatarManager implements AvatarManager
{
    private LoggerInterface $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->logger = $logger;
    }

    public function uploadAvatarForUser(User $user, UploadedFile $image): void
    {
        $existingAvatar = $user->avatar;

        if ($existingAvatar !== null) {
            $this->logger->info("Removing existing avatar for user $user->id");
            Storage::disk('public')->delete($existingAvatar);
        }

        $this->logger->info("Uploading avatar for user $user->id");

        $fileName = $image->getFilename();
        $extension = $image->getClientOriginalExtension();
        $hasher = new Hashids('', 10);
        $userHashId = $hasher->encode($user->id);
        $filePath = "avatars/$userHashId/$fileName.$extension";
        $contents = $image->getContent();

        Storage::disk('public')->put($filePath, $contents);

        $this->logger->info("Avatar successfully uploaded for user $user->id, updating file path in database");

        $user->avatar = $filePath;
        $user->save();

        $this->logger->info("Avatar successfully saved for user $user->id");
    }
}
