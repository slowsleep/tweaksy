import { createContext } from 'react';
import { Color, Theme, Radius } from "@/types/index";

export interface ThemeContextProps {
    theme: Theme;
    color: Color;
    radius: Radius;
    setTheme: (theme: Theme) => void;
    setColor: (color: Color) => void;
    setRadius: (radius: Radius) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
