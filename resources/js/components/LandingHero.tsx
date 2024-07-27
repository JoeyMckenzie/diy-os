import { Button } from "@/components/ui/button";
import { Link } from "@inertiajs/react";

export function LandingHero() {
    return (
        <div className="bg-white">
            <div className="px-6 py-24 lg:px-8 sm:px-6 sm:py-32">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-bold text-3xl text-gray-900 tracking-tight sm:text-4xl">
                        Manage Like a Pro, Build Like a Boss
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-gray-600 text-lg leading-8">
                        The best project management platform to solo builders
                        and DIY'ers.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href={route("login")}>
                            <Button>Get started</Button>
                        </Link>
                        <Link
                            href={route("register")}
                            className="font-semibold text-gray-900 text-sm leading-6"
                        >
                            Learn more <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
