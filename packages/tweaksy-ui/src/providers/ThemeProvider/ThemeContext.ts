import { createContext } from 'react';
import { ColorType, ThemeType, RadiusType } from "@/theme/index";

export interface ThemeContextProps {
    theme: ThemeType;
    color: ColorType;
    radius: RadiusType;
    setTheme: (theme: ThemeType) => void;
    setColor: (color: ColorType) => void;
    setRadius: (radius: RadiusType) => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
