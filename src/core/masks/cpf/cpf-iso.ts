export const cpfIso = (cpf: string | number) => {
  return String(cpf).replace(".", "").replace(".", "").replace("-", "");
};
