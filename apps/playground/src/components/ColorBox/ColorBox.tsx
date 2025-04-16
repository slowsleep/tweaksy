import React from "react";
import "./ColorBox.css";
import type { Color } from "tweaksy-ui";

type ColorBoxProps = {
    color: Color;
    title?: string;
    shade?: number;
}

export const ColorBox: React.FC<ColorBoxProps> = ({
    color,
    title,
    shade = 5,
}) => (
    <div
        className="color-box"
        style={{
            backgroundColor: `var(--color-${color}-${shade})`,
        }}
        title={title}
    />
);
