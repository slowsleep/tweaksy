import React from "react";
import "./Button.css";
import { useTheme } from "@/providers/ThemeProvider/useTheme";
import { ColorType, RadiusType } from "@/theme/index";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "solid" | "outline";
    shadow?: "none" | "sm" | "md" | "lg";
    customColor?: ColorType;
    customRadius?: RadiusType;
    [key: string]: any;
};

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    className = "",
    disabled = false,
    size = "md",
    variant = "solid",
    shadow = "none",
    customColor,
    customRadius,
    ...props
}) => {
    const { theme, color, radius } = useTheme();
    let radiusClass: String = radius;

    if (customRadius !== undefined) {
        if (customRadius !== "none") {
            radiusClass = customRadius;
        } else {
            radiusClass = "";
        }
    }

    let classes =  `
        tw-button
        ${size}
        ${variant}
        tw-${theme}
        ${radiusClass !== "" ? "tw-radius-" + radiusClass : ""}
        ${shadow !== "none" ? "tw-shadow-" + shadow : ""}
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
