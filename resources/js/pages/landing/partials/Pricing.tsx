import { CheckIcon } from "@heroicons/react/20/solid";

const includedFeatures = [
    "Private forum access",
    "Member resources",
    "Entry to annual conference",
    "Official member t-shirt",
];

export function Pricing() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
                        Simple no-tricks pricing
                    </h2>
                    <p className="mt-6 text-gray-600 text-lg leading-8">
                        Distinctio et nulla eum soluta et neque labore
                        quibusdam. Saepe et quasi iusto modi velit ut non
                        voluptas in. Explicabo id ut laborum.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:mx-0 sm:mt-20 lg:flex lg:max-w-none">
                    <div className="p-8 lg:flex-auto sm:p-10">
                        <h3 className="font-bold text-2xl text-gray-900 tracking-tight">
                            Lifetime membership
                        </h3>
                        <p className="mt-6 text-base text-gray-600 leading-7">
                            Lorem ipsum dolor sit amet consect etur adipisicing
                            elit. Itaque amet indis perferendis blanditiis
                            repellendus etur quidem assumenda.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none font-semibold text-indigo-600 text-sm leading-6">
                                What’s included
                            </h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul className="mt-8 grid grid-cols-1 gap-4 text-gray-600 text-sm leading-6 sm:grid-cols-2 sm:gap-6">
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        aria-hidden="true"
                                        className="h-6 w-5 flex-none text-indigo-600"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-gray-900/5 ring-inset lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="font-semibold text-base text-gray-600">
                                    Free. Yes, seriously.
                                </p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="font-bold text-5xl text-gray-900 tracking-tight">
                                        $0
                                    </span>
                                    <span className="font-semibold text-gray-600 text-sm leading-6 tracking-wide">
                                        USD
                                    </span>
                                </p>
                                <a
                                    href={route("welcome")}
                                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center font-semibold text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-2"
                                >
                                    Sign up
                                </a>
                                <p className="mt-6 text-gray-600 text-xs leading-5">
                                    Invoices and receipts available for easy
                                    company reimbursement
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
