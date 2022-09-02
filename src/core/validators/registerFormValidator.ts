import { RegisterData } from "../../interfaces/user-interfaces";
import * as Yup from "yup";

export const registerFormValidator = (data: RegisterData) => {
  const schema = Yup.object().shape({
    name: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
      .email("Insira um email valido")
      .required("Email é obrigatorio"),
    cpf: Yup.string().required("CPF é obrigatorio"),
    description: Yup.string(),
    phone: Yup.string().required("Telefone é obrigatorio"),
    birth_date: Yup.string().required("Data de nascimento é obrigatoria"),
    confirm_password: Yup.string()
      .required("Campo é obrigatorio")
      .oneOf([Yup.ref("password"), null], "Senhas precisam ser iguais"),
    password: Yup.string().required("Password é obrigatorio"),
    zip_code: Yup.string().required("CEP é obrigatorio"),
    state: Yup.string().required("Estado é obrigatorio"),
    city: Yup.string().required("Cidade é obrigatorio"),
    number: Yup.string().required("Numero é obrigatorio"),
    complement: Yup.string(),
  });

  return schema.validate(data, { abortEarly: false });
};
