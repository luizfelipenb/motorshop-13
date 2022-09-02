import React from "react";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { errorFeedback } from "./errorFeedback";

export function errorFeedbackWithValidator(
  err: any,
  formRef: React.RefObject<FormHandles>
) {
  if (err instanceof Yup.ValidationError) {
    const validationErrors: { [key: string]: string } = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[(error as unknown as any).path] = error.message;
      });
      formRef.current?.setErrors(validationErrors);
    }
  } else {
    errorFeedback(err);
  }
}
