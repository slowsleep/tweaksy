import React from "react";
import "./Flex.css";

type FlexProps = {
    children: React.ReactNode;
    direction?: "row" | "col";
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "space-between" | "space-around";
    gap?: "1" | "2" | "3" | "4" | "5";
    className?: string;
};

export const Flex: React.FC<FlexProps> = ({
    children,
    direction = "row",
    align = "stretch",
    justify = "start",
    gap,
    className = "",
}) => {
    const classes = `
        tw-flex
        tw-${direction}
        tw-align-${align}
        tw-justify-${justify}
        ${gap ? "tw-gap-" + gap : ""}
        ${className}
    `.trim()

    return (
        <div
            className={classes}>
            {children}
        </div>
    );
};
