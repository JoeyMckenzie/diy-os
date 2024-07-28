import { useTheme } from "@/components/ThemeProvider";
import {
    Dropdown,
    DropdownButton,
    DropdownItem,
    DropdownLabel,
    DropdownMenu,
} from "@/components/catalyst/dropdown";
import {
    ComputerDesktopIcon,
    MoonIcon,
    SunIcon,
} from "@heroicons/react/16/solid";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Dropdown>
            <DropdownButton plain>
                {theme === "light" && <SunIcon />}
                {theme === "dark" && <MoonIcon />}
                {theme === "system" && <ComputerDesktopIcon />}
            </DropdownButton>
            <DropdownMenu anchor="bottom">
                <DropdownItem onClick={() => setTheme("light")}>
                    <SunIcon />
                    <DropdownLabel>Light</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => setTheme("dark")}>
                    <MoonIcon />
                    <DropdownLabel>Dark</DropdownLabel>
                </DropdownItem>
                <DropdownItem onClick={() => setTheme("system")}>
                    <ComputerDesktopIcon />
                    <DropdownLabel>System</DropdownLabel>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
