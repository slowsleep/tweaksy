import React, { useState } from "react";
import { ColorType, ThemeType, RadiusType, ThemeEnum } from "@/theme/index";
import { ThemeContext } from "./ThemeContext";
import "./ThemeProvider.css";

interface ThemeProviderProps {
    children: React.ReactNode;
    disableFontStyles?: boolean;
    initialTheme?: ThemeType;
    initialColor?: ColorType;
    initialRadius?: RadiusType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    disableFontStyles = false,
    initialTheme = ThemeEnum.LIGHT,
    initialColor = "blue",
    initialRadius = "md",
}) => {
    const [theme, setTheme] = useState<ThemeType>(initialTheme);
    const [color, setColor] = useState<ColorType>(initialColor);
    const [radius, setRadius] = useState<RadiusType>(initialRadius);

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
