import react from 'react';
import "./Section.css";
import { useTheme } from "@/providers/ThemeProvider/useTheme";

type SectionProps = {
    children: React.ReactNode;
    className?: string;
    [key: string]: any;
};

export const Section: React.FC<SectionProps> = ({
    children,
    className = "",
    ...props
}) => {
    const { theme, color, radius } = useTheme();
    const classes = `
        tw-section
        tw-color-${color}
        tw-section--${theme}
        tw-radius-${radius}
        ${className}
    `.trim();

    return (
        <div
            className={classes}
            {...props}
        >
            {children}
        </div>
    );
}