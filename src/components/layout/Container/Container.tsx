import React from "react";
import "./Container.css";

type ContainerProps = {
    size?: "sm" | "md" | "lg" | "xl" | "2xl" | "fluid";
    children: React.ReactNode;
    className?: string;
};

export const Container: React.FC<ContainerProps> = ({
    size = "md",
    children,
    className = "",
}) => {
    const classes = `tw-container tw-container--${size} ${className}`.trim();
    
    return (
        <div className={classes}>
            {children}
        </div>
    );
};
