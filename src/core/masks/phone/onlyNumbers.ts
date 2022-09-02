export const onlyNumbers = (number: string) =>
  String(number)
    .replace(/\D/g, "")
    .replaceAll("(", "")
    .replaceAll(")", "")
    .replaceAll(" ", "")
    .replaceAll("-", "");
