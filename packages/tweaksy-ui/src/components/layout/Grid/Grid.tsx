import React from "react";
import "./Grid.css";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    columns?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    gap?: "1" | "2" | "3" | "4" | "5";
    align?: "start" | "center" | "end" | "stretch";
    justify?: "start" | "center" | "end" | "space-between" | "space-around";
    className?: string;
    style?: React.CSSProperties;
    children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
    columns = 2,
    gap,
    align = "stretch",
    justify = "stretch",
    className = "",
    style = {},
    children,
    ...rest
}) => {
    const classes = `
        tw-grid
        tw-grid-cols-${columns}
        ${gap ? "tw-gap-" + gap : ""}
        tw-align-${align}
        tw-justify-${justify}
        ${className}
    `.trim();

    return (
        <div
            className={classes}
            style={style}
            {...rest}
        >
            {children}
        </div>
    );
};
