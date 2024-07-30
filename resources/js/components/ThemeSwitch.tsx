import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/catalyst/button";
import { MoonIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/20/solid";

export function ThemeSwitch() {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button plain onClick={toggleTheme}>
            {theme === "light" && <SunIcon />}
            {theme === "dark" && <MoonIcon />}
        </Button>
    );
}
