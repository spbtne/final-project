export const AmountOfPokemonsOneScreen =
    Math.floor((innerHeight * 0.98) / 370) *
    Math.floor((innerWidth * 0.98) / 270);

export const capitalize = (s: string): string => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};
