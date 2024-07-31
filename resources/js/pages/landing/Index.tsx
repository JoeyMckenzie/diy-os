import { AppLayout } from "@/layouts/AppLayout";
import { LandingFeatures } from "@/pages/landing/partials/LandingFeatures";
import { LandingFooter } from "@/pages/landing/partials/LandingFooter";
import { LandingHeader } from "@/pages/landing/partials/LandingHeader";
import { LandingHero } from "@/pages/landing/partials/LandingHero";
import { LaunchSignUp } from "@/pages/landing/partials/LaunchSignUp";
import { Pricing } from "@/pages/landing/partials/Pricing";
import type { PageProps } from "@/types";
import { Head } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <AppLayout>
            <Head title="diyOS | Project management for solo builders and DIY'ers." />
            <main className="dark:bg-zinc-950">
                <LandingHeader />
                <LandingHero />
                <LandingFeatures />
                <Pricing />
                <LaunchSignUp />
                <LandingFooter />
            </main>
        </AppLayout>
    );
}
