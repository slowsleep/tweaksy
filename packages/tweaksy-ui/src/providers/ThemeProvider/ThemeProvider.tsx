import React, { useState } from "react";
import { Color, Theme, Radius } from "@/types/index";
import { ThemeContext } from "./ThemeContext";
import "./ThemeProvider.css";

interface ThemeProviderProps {
    children: React.ReactNode;
    disableFontStyles?: boolean;
    initialTheme?: Theme;
    initialColor?: Color;
    initialRadius?: Radius;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    disableFontStyles = false,
    initialTheme = "light",
    initialColor = "blue",
    initialRadius = "md",
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const [color, setColor] = useState<Color>(initialColor);
    const [radius, setRadius] = useState<Radius>(initialRadius);

    return (
        <ThemeContext.Provider value={{ theme, color, radius, setTheme, setColor, setRadius }}>
            <div
                className={
                    (disableFontStyles ? "" : "tw-font") +
                    ` tw-${theme}`
                }
                >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
