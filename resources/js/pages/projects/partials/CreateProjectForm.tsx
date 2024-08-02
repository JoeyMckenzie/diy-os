import {
    Description,
    Field,
    FieldGroup,
    Fieldset,
    Label,
} from "@/components/catalyst/fieldset";
import { Heading } from "@/components/catalyst/heading";
import { Input } from "@/components/catalyst/input";
import { Text } from "@/components/catalyst/text";
import { Textarea } from "@/components/catalyst/textarea";
import clsx from "clsx";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import Datepicker, { type DateValueType } from "react-tailwindcss-datepicker";

export function CreateProjectForm() {
    const [completionDate, setCompletionDate] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });

    const handleValueChange = (newValue: DateValueType) => {
        setCompletionDate(newValue);
    };

    return (
        <form>
            <Fieldset>
                <FieldGroup className="mt-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-zinc-900/10 border-b pb-12 md:grid-cols-3">
                        <div>
                            <Heading>Create a project</Heading>
                            <Text>
                                This information will be displayed publicly so
                                be careful what you share.
                            </Text>
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 md:col-span-2 sm:grid-cols-6">
                            <Field className="sm:col-span-4">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    id="title"
                                    name="title"
                                    type="text"
                                    placeholder="Rebuild the pergola, replace backyard fence..."
                                />
                            </Field>

                            <Field className="col-span-full">
                                <Label htmlFor="about">Description</Label>
                                <Textarea
                                    id="about"
                                    name="about"
                                    rows={3}
                                    defaultValue={""}
                                />
                                <Description>
                                    Optionally, give your project a short
                                    description.
                                </Description>
                            </Field>

                            {/*
                                <Field className="col-span-full">
                                    <Label htmlFor="cover-photo">Cover photo</Label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-zinc-900/25 border-dashed px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                aria-hidden="true"
                                                className="mx-auto h-12 w-12 text-zinc-300"
                                            />
                                            <div className="mt-4 flex text-sm text-zinc-600 leading-6">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs text-zinc-600 leading-5">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </Field>
                            */}

                            <Field className="flex max-w-md flex-col space-y-2 sm:col-span-4">
                                <Label htmlFor="cover-photo">
                                    Completion date
                                </Label>
                                <Datepicker
                                    asSingle={true}
                                    value={completionDate}
                                    onChange={(value, e) =>
                                        handleValueChange(value)
                                    }
                                />
                                <Description>
                                    Optionally, provide a target completion
                                    date.
                                </Description>
                            </Field>

                            <Field className="sm:col-span-4">
                                <Label htmlFor="budget">
                                    What's your budget?
                                </Label>
                                <NumericFormat
                                    value="0"
                                    prefix="$"
                                    allowLeadingZeros
                                    thousandSeparator=","
                                    className={clsx(
                                        "my-2",
                                        // Basic layout
                                        "relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)]",
                                        // Typography
                                        "text-base/6 text-zinc-950 dark:text-white placeholder:text-zinc-500 sm:text-sm/6",
                                        // Border
                                        "border border-zinc-950/10 dark:border-white/10 dark:data-[hover]:border-white/20 data-[hover]:border-zinc-950/20",
                                        // Background color
                                        "bg-transparent dark:bg-white/5",
                                        // Hide default focus styles
                                        "focus:outline-none",
                                        // Invalid state
                                        "data-[invalid]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500",
                                        // Disabled state
                                        "dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:border-zinc-950/20 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%]",
                                        // System icons
                                        "dark:[color-scheme:dark]",
                                    )}
                                />
                                <Description>
                                    Optionally, provide a budget for tracking.
                                </Description>
                            </Field>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-zinc-900/10 border-b pb-12 md:grid-cols-3">
                        <div>
                            <h2 className="font-semibold text-base text-zinc-900 leading-7">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm text-zinc-600 leading-6">
                                Use a permanent address where you can receive
                                mail.
                            </p>
                        </div>

                        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 md:col-span-2 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    First name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="first-name"
                                        name="first-name"
                                        type="text"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    Last name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="last-name"
                                        name="last-name"
                                        type="text"
                                        autoComplete="family-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label
                                    htmlFor="email"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="country"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset sm:max-w-xs sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    >
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="street-address"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="street-address"
                                        name="street-address"
                                        type="text"
                                        autoComplete="street-address"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label
                                    htmlFor="city"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="city"
                                        name="city"
                                        type="text"
                                        autoComplete="address-level2"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="region"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="region"
                                        name="region"
                                        type="text"
                                        autoComplete="address-level1"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="postal-code"
                                    className="block font-medium text-sm text-zinc-900 leading-6"
                                >
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="postal-code"
                                        name="postal-code"
                                        type="text"
                                        autoComplete="postal-code"
                                        className="block w-full rounded-md border-0 py-1.5 text-zinc-900 shadow-sm ring-1 ring-zinc-300 ring-inset placeholder:text-zinc-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-zinc-900/10 border-b pb-12 md:grid-cols-3">
                        <div>
                            <h2 className="font-semibold text-base text-zinc-900 leading-7">
                                Notifications
                            </h2>
                            <p className="mt-1 text-sm text-zinc-600 leading-6">
                                We'll always let you know about important
                                changes, but you pick what else you want to hear
                                about.
                            </p>
                        </div>

                        <div className="max-w-2xl space-y-10 md:col-span-2">
                            <fieldset>
                                <legend className="font-semibold text-sm text-zinc-900 leading-6">
                                    By Email
                                </legend>
                                <div className="mt-6 space-y-6">
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="comments"
                                                name="comments"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label
                                                htmlFor="comments"
                                                className="font-medium text-zinc-900"
                                            >
                                                Comments
                                            </label>
                                            <p className="text-zinc-500">
                                                Get notified when someones posts
                                                a comment on a posting.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="candidates"
                                                name="candidates"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label
                                                htmlFor="candidates"
                                                className="font-medium text-zinc-900"
                                            >
                                                Candidates
                                            </label>
                                            <p className="text-zinc-500">
                                                Get notified when a candidate
                                                applies for a job.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="relative flex gap-x-3">
                                        <div className="flex h-6 items-center">
                                            <input
                                                id="offers"
                                                name="offers"
                                                type="checkbox"
                                                className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                            />
                                        </div>
                                        <div className="text-sm leading-6">
                                            <label
                                                htmlFor="offers"
                                                className="font-medium text-zinc-900"
                                            >
                                                Offers
                                            </label>
                                            <p className="text-zinc-500">
                                                Get notified when a candidate
                                                accepts or rejects an offer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset>
                                <legend className="font-semibold text-sm text-zinc-900 leading-6">
                                    Push Notifications
                                </legend>
                                <p className="mt-1 text-sm text-zinc-600 leading-6">
                                    These are delivered via SMS to your mobile
                                    phone.
                                </p>
                                <div className="mt-6 space-y-6">
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-everything"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label
                                            htmlFor="push-everything"
                                            className="block font-medium text-sm text-zinc-900 leading-6"
                                        >
                                            Everything
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-email"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label
                                            htmlFor="push-email"
                                            className="block font-medium text-sm text-zinc-900 leading-6"
                                        >
                                            Same as email
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-x-3">
                                        <input
                                            id="push-nothing"
                                            name="push-notifications"
                                            type="radio"
                                            className="h-4 w-4 border-zinc-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                        <label
                                            htmlFor="push-nothing"
                                            className="block font-medium text-sm text-zinc-900 leading-6"
                                        >
                                            No push notifications
                                        </label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </FieldGroup>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="font-semibold text-sm text-zinc-900 leading-6"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 font-semibold text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
                    >
                        Save
                    </button>
                </div>
            </Fieldset>
        </form>
    );
}
