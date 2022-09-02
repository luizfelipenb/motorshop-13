import { toast, ToastVariants } from "./toast";
import { formatError } from "./formatError";

export function errorFeedback(
  err: any,
  title = "Ops, parece que ocorreu um erro"
) {
  toast({
    message: formatError(err),
    title,
    variant: ToastVariants.ERROR,
  });
}
