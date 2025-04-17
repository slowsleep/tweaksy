import React from "react";
import "./Button.css";
import { useTheme } from "@/providers/ThemeProvider/useTheme";
import { ColorType } from "@/theme/index";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    customColor?: ColorType;
    variant?: "solid" | "outline";
    shadow?: "none" | "sm" | "md" | "lg";
    [key: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    disabled = false,
    size = "md",
    customColor,
    variant = "solid",
    shadow = "none",
    ...props
}) => {
    const { theme, color, radius } = useTheme();

    let classes =  `
        tw-button
        ${size}
        ${variant}
        tw-radius-${radius}
        ${shadow !== "none" ? "tw-shadow-" + shadow : ""}
        tw-${theme}
        tw-color-${customColor || color}
        ${className}
    `.trim();

    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
};
