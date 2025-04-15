import React from "react";
import "./Input.css";

type InputProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
    [key: string]: any;
};

export const Input: React.FC<InputProps> = ({
    value,
    onChange,
    className = "",
    placeholder,
    type = "text",
    disabled = false,
    ...props
}) => {
    const classes = `
        tweaksy-input
        ${className}
    `.trim();

    return (
        <input
            className={classes}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            {...props}
        />
    );
};
