import { Avatar } from "@/components/catalyst/avatar";
import {
    Description,
    ErrorMessage,
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Input } from "@/components/catalyst/input";
import { UploadProgressBar } from "@/pages/profile/partials/UploadProgressBar";
import type { User } from "@/types";
import { router, useForm } from "@inertiajs/react";
import React, { type ChangeEvent, type FormEventHandler } from "react";

export function AvatarUploader({
    avatar,
    initials,
}: Pick<User, "avatar" | "initials">) {
    const { data, errors, setData, post, progress } = useForm<{
        avatar?: File | null;
    }>({
        avatar: null,
    });

    const upload: FormEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            e.preventDefault();
            setData("avatar", e.target.files[0]);
            router.post("/avatar", {
                _method: "put",
                avatar: e.target.files[0],
            });
        }
    };

    return (
        <div className="flex flex-row items-center gap-x-4">
            {avatar && (
                <Avatar
                    square
                    className="size-24 bg-zinc-900 text-white dark:bg-white dark:text-black"
                    alt="user avatar"
                    src={avatar}
                />
            )}
            {!avatar && (
                <Avatar
                    square
                    className="size-24 bg-zinc-900 text-white dark:bg-white dark:text-black"
                    alt="user avatar"
                    initials={initials}
                />
            )}

            <Fieldset>
                <FieldGroup className="w-full">
                    <Field>
                        <Label htmlFor="avatar">Profile picture</Label>
                        <Input
                            type="file"
                            onChange={upload}
                            autoComplete="avatar"
                        />
                        <Description>JPG, GIF or PNG. 1MB max.</Description>
                        {progress?.percentage && (
                            <UploadProgressBar value={progress.percentage} />
                        )}
                        {errors.avatar && (
                            <ErrorMessage>{errors.avatar}</ErrorMessage>
                        )}
                    </Field>
                </FieldGroup>
            </Fieldset>
        </div>
    );
}
