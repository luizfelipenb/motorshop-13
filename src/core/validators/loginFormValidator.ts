import { UserLogin } from "../../interfaces/user-interfaces";
import * as Yup from "yup";

export const loginFormValidator = (data: UserLogin) => {
  const schema = Yup.object().shape({
    email: Yup.string().required("Usuario obrigatorio"),
    password: Yup.string().required("Senha obrigatoria"),
  });

  return schema.validate(data, { abortEarly: false });
};
