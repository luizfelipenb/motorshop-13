export function formatError(err: any, message = "Ocorreu um erro inesperado") {
  if (err.response) {
    const message = err.response.data.message;
    if (Array.isArray(message)) {
      return message.join(" ");
    } else {
      return message;
    }
  } else return message;
}
