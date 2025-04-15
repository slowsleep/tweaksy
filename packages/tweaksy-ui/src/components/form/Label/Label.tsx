import React from 'react';
import './Label.css';

interface LabelProps {
    children: React.ReactNode;
    htmlFor?: string;
}

export const Label: React.FC<LabelProps> = ({ children, htmlFor }) => {
    return (
        <label className="tweaksy-label" htmlFor={htmlFor}>
            {children}
        </label>
    );
}
