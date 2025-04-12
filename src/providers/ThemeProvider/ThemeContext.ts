import { createContext } from 'react';
import { Color, Theme } from "@/types/index";

export interface ThemeContextProps {
    theme: Theme;
    color: Color;
    setTheme: (theme: Theme) => void;
    setColor: (color: Color) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
