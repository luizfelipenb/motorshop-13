export const cepMask = (cep: string) => {
  return String(cep)
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2");
};
