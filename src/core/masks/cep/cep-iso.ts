export function cepIso(cep: string) {
  return cep.replaceAll(".", "").replaceAll("-", "");
}
