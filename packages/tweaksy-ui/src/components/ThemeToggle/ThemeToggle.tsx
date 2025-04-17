import React from "react";
import { useTheme } from "@/providers/ThemeProvider/useTheme";
import { ThemeType, ThemeEnum } from "@/theme/index";
import "./ThemeToggle.css";

export interface ThemeToggleProps {
    className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
    className = "",
}): React.JSX.Element => {
    const { theme, setTheme } = useTheme();

    const sunSvg = (
        <svg
            className="tw-theme-icon tw-sun-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            />
        </svg>
    );

    const moonSvg = (
        <svg
            className="tw-theme-icon tw-moon-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"
            />
        </svg>
    );

    const classes = `tw-theme-toggle ${className}`.trim();
    return (
        <button
            className={classes}
            type="button"
            aria-label="Toggle theme"
            title="Toggle theme"
            onClick={() => {
                let newTheme: ThemeType =
                    theme === ThemeEnum.LIGHT
                        ? ThemeEnum.DARK
                        : ThemeEnum.LIGHT;
                setTheme(newTheme);
            }}
        >
            {theme === "light" ? moonSvg : sunSvg}
        </button>
    );
};
