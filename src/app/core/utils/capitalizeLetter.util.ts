export const capitalizeLetter = (text: string) => {
  return text
    .split(" ")
    .map((t) => t[0].toLocaleUpperCase() + t.slice(1))
    .join(" ");
};
