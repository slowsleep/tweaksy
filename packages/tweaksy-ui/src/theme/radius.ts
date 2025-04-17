export const radius = [
    "none",
    "sm",
    "md",
    "lg",
    "full",
] as const;

export type RadiusType = typeof radius[number];
