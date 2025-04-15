export const colors = [
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "azure",
    "blue",
    "violet",
    "purple",
    "fuchsia",
    "pink",
] as const;

export type Color = typeof colors[number];
