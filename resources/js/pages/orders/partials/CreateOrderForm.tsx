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
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "@inertiajs/react";
import { type FormEventHandler, useEffect, useState } from "react";

export function CreateOrderForm() {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
    });

    // biome-ignore lint/correctness/useExhaustiveDependencies: reset only used on mount
    useEffect(() => {
        return () => {
            reset("title");
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <form onSubmit={submit}>
            <div className="space-y-12">
                <Fieldset className="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 border-b pb-12 md:grid-cols-3">
                    <div>
                        <Heading>Order Summary</Heading>
                        <Text>
                            This information will be used to describe details
                            about the order to help us categorize and sort
                            orders by materials, items, and projects associated
                            to it.
                        </Text>
                    </div>

                    <FieldGroup className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 md:col-span-2 sm:grid-cols-6">
                        <Field className="sm:col-span-4">
                            <Label htmlFor="website">Website</Label>
                            <Input
                                id="website"
                                name="website"
                                type="text"
                                placeholder="www.example.com"
                            />
                        </Field>

                        <Field className="col-span-full">
                            <Label htmlFor="about">About</Label>
                            <Textarea
                                id="about"
                                name="about"
                                rows={3}
                                defaultValue=""
                            />
                            <Description>
                                Write a few sentences about yourself.
                            </Description>
                        </Field>

                        <Field className="col-span-full">
                            <Label htmlFor="photo">Photo</Label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <UserCircleIcon
                                    aria-hidden="true"
                                    className="h-12 w-12 text-gray-300"
                                />
                                <button
                                    type="button"
                                    className="rounded-md bg-white px-2.5 py-1.5 font-semibold text-gray-900 text-sm shadow-sm ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                                >
                                    Change
                                </button>
                            </div>
                        </Field>

                        <div className="col-span-full">
                            <label
                                htmlFor="cover-photo"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                Cover photo
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-gray-900/25 border-dashed px-6 py-10">
                                <div className="text-center">
                                    <PhotoIcon
                                        aria-hidden="true"
                                        className="mx-auto h-12 w-12 text-gray-300"
                                    />
                                    <div className="mt-4 flex text-gray-600 text-sm leading-6">
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
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-gray-600 text-xs leading-5">
                                        PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FieldGroup>
                </Fieldset>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 border-b pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="font-semibold text-base text-gray-900 leading-7">
                            Personal Information
                        </h2>
                        <p className="mt-1 text-gray-600 text-sm leading-6">
                            Use a permanent address where you can receive mail.
                        </p>
                    </div>

                    <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 md:col-span-2 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                First name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                Last name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-4">
                            <label
                                htmlFor="email"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-3">
                            <label
                                htmlFor="country"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                Country
                            </label>
                            <div className="mt-2">
                                <select
                                    id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset sm:max-w-xs sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
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
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="street-address"
                                    name="street-address"
                                    type="text"
                                    autoComplete="street-address"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label
                                htmlFor="city"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="region"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                State / Province
                            </label>
                            <div className="mt-2">
                                <input
                                    id="region"
                                    name="region"
                                    type="text"
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="postal-code"
                                className="block font-medium text-gray-900 text-sm leading-6"
                            >
                                ZIP / Postal code
                            </label>
                            <div className="mt-2">
                                <input
                                    id="postal-code"
                                    name="postal-code"
                                    type="text"
                                    autoComplete="postal-code"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-gray-900/10 border-b pb-12 md:grid-cols-3">
                    <div>
                        <h2 className="font-semibold text-base text-gray-900 leading-7">
                            Notifications
                        </h2>
                        <p className="mt-1 text-gray-600 text-sm leading-6">
                            We'll always let you know about important changes,
                            but you pick what else you want to hear about.
                        </p>
                    </div>

                    <div className="max-w-2xl space-y-10 md:col-span-2">
                        <fieldset>
                            <legend className="font-semibold text-gray-900 text-sm leading-6">
                                By Email
                            </legend>
                            <div className="mt-6 space-y-6">
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="comments"
                                            name="comments"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="comments"
                                            className="font-medium text-gray-900"
                                        >
                                            Comments
                                        </label>
                                        <p className="text-gray-500">
                                            Get notified when someones posts a
                                            comment on a posting.
                                        </p>
                                    </div>
                                </div>
                                <div className="relative flex gap-x-3">
                                    <div className="flex h-6 items-center">
                                        <input
                                            id="candidates"
                                            name="candidates"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="candidates"
                                            className="font-medium text-gray-900"
                                        >
                                            Candidates
                                        </label>
                                        <p className="text-gray-500">
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
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                        />
                                    </div>
                                    <div className="text-sm leading-6">
                                        <label
                                            htmlFor="offers"
                                            className="font-medium text-gray-900"
                                        >
                                            Offers
                                        </label>
                                        <p className="text-gray-500">
                                            Get notified when a candidate
                                            accepts or rejects an offer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend className="font-semibold text-gray-900 text-sm leading-6">
                                Push Notifications
                            </legend>
                            <p className="mt-1 text-gray-600 text-sm leading-6">
                                These are delivered via SMS to your mobile
                                phone.
                            </p>
                            <div className="mt-6 space-y-6">
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-everything"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="push-everything"
                                        className="block font-medium text-gray-900 text-sm leading-6"
                                    >
                                        Everything
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-email"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="push-email"
                                        className="block font-medium text-gray-900 text-sm leading-6"
                                    >
                                        Same as email
                                    </label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input
                                        id="push-nothing"
                                        name="push-notifications"
                                        type="radio"
                                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    />
                                    <label
                                        htmlFor="push-nothing"
                                        className="block font-medium text-gray-900 text-sm leading-6"
                                    >
                                        No push notifications
                                    </label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="font-semibold text-gray-900 text-sm leading-6"
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
        </form>
    );
}
