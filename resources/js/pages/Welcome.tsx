import { Footer } from "@/components/Footer";
import { LandingHeader } from "@/components/LandingHeader";
import { LandingHero } from "@/components/LandingHero";
import { AppLayout } from "@/layouts/AppLayout";
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
            <main className="dark:bg-neutral-950">
                <LandingHeader />
                <LandingHero />
                <Footer />
            </main>
        </AppLayout>
    );
}
