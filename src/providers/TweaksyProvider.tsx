import React from "react";
import "./TweaksyProvider.css";

interface TweaksyProviderProps {
    children: React.ReactNode;
    disableFontStyles?: boolean;
    theme?: "light" | "dark";
}

export const TweaksyProvider: React.FC<TweaksyProviderProps> = ({
    children,
    disableFontStyles = false,
    theme = "light",
}) => {
    return (
        <div
            className={
                (disableFontStyles ? "" : "tweaksy-font") +
                ` tweaksy-${theme}`
            }
        >
            {children}
        </div>
    );
};
