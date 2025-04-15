export const radius = [
    "none",
    "sm",
    "md",
    "lg",
    "full",
] as const;

export type Radius = typeof radius[number];
