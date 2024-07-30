import { Button } from "@/components/catalyst/button";
import { Heading } from "@/components/catalyst/heading";
import { Text } from "@/components/catalyst/text";

export function LandingHero() {
    return (
        <div className="px-6 py-24 lg:px-8 sm:px-6 sm:py-32">
            <div className="mx-auto max-w-2xl text-center">
                <Heading>Manage Like a Pro, Build Like a Boss</Heading>
                <Text className="mx-auto mt-6 max-w-xl text-lg leading-8">
                    The best project management platform to solo builders and
                    DIY'ers.
                </Text>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button href={route("login")}>Get started</Button>
                    <Button
                        plain
                        href={route("register")}
                        className="font-semibold text-gray-900 text-sm leading-6"
                    >
                        Learn more <span aria-hidden="true">→</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
