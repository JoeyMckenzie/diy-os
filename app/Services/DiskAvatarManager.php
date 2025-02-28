<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\AvatarManager;
use App\Models\User;
use Illuminate\Contracts\Filesystem\Factory as Storage;
use Illuminate\Http\UploadedFile;
use Override;
use Psr\Log\LoggerInterface;

final readonly class DiskAvatarManager implements AvatarManager
{
    public function __construct(private LoggerInterface $logger, private Storage $storage) {}

    #[Override]
    public function uploadAvatarForUser(User $user, UploadedFile $image): void
    {
        $existingAvatar = $user->avatar;

        if ($existingAvatar !== null) {
            $this->logger->info("Removing existing avatar for user $user->id");
            $this->storage->disk('public')->delete($existingAvatar);
        }

        $this->logger->info("Uploading avatar for user $user->id");

        $hashName = $image->hashName();
        $filePath = "avatars/$hashName";
        $contents = $image->getContent();

        $this->storage->disk('public')->put($filePath, $contents);
        $this->logger->info("Avatar successfully uploaded for user $user->id, updating file path in database");

        $user->avatar = $filePath;
        $user->save();

        $this->logger->info("Avatar successfully saved for user $user->id");
    }
}
