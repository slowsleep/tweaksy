import React, { useState } from "react";
import { Color, Theme } from "../../types";
import { ThemeContext } from "./ThemeContext";
import "./TweaksyProvider.css";

interface TweaksyProviderProps {
    children: React.ReactNode;
    disableFontStyles?: boolean;
    initialTheme?: Theme;
    initialColor?: Color;
}

export const TweaksyProvider: React.FC<TweaksyProviderProps> = ({
    children,
    disableFontStyles = false,
    initialTheme = "light",
    initialColor = "blue",
}) => {
    const [theme, setTheme] = useState<Theme>(initialTheme);
    const [color, setColor] = useState<Color>(initialColor);

    return (
        <ThemeContext.Provider value={{ theme, color, setTheme, setColor }}>
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
