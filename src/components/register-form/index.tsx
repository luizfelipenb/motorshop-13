import React from "react";
import { useNavigate } from "react-router-dom";
import { cepIso } from "../../core/masks/cep/cep-iso";
import { cepMask } from "../../core/masks/cep/cep-mask";
import { cpfIso } from "../../core/masks/cpf/cpf-iso";
import { cpfMask } from "../../core/masks/cpf/cpf-mask";
import { onlyNumbers } from "../../core/masks/phone/onlyNumbers";
import { phoneMask } from "../../core/masks/phone/phone-mask";
import { useAuth } from "../../core/providers/Auth";
import { registerFormValidator } from "../../core/validators/registerFormValidator";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";
import { AccountType } from "../../enum/register-form-toggle-variations";
import { RegisterData } from "../../interfaces/user-interfaces";
import { errorFeedbackWithValidator } from "../../utils/errorFeedbackWithValidator";
import { toast, ToastVariants } from "../../utils/toast";
import { Button } from "../button";
import Input from "../input";
import GlobalLoader from "../loader";

import {
  Container,
  StyledFormContainer,
  StyledFormSection,
  StyledRoot,
  StyledItem,
} from "./styles";

const RegisterForm: React.FC = () => {
  const [accountType, setAccountType] = React.useState(AccountType.BUYER);
  const [isLoading, setIsLoading] = React.useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const formRef = React.useRef({} as any);

  const handleSubmit = React.useCallback(async (data: RegisterData) => {
    const userData = {
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      phone: data.phone,
      birthDate: data.birth_date,
      descritption: data.description,
      isSeller: accountType == AccountType.BUYER ? false : true,
      password: data.password,
    };

    const addressData = {
      zipCode: data.zip_code,
      state: data.state,
      city: data.city,
      street: data.street,
      number: data.number,
      complement: data.complement,
    };

    console.log(data.phone, data.zip_code, data.cpf);

    try {
      await registerFormValidator(data);

      setIsLoading(true);

      await signUp({ user: userData, address: addressData }).then(() => {
        toast({
          title: "Sucesso",
          message: "Cadastro efetuado com sucesso",
          variant: ToastVariants.SUCCESS,
        });
        navigate("/login");
      });
    } catch (err) {
      errorFeedbackWithValidator(err, formRef);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <Container>
      <StyledFormContainer ref={formRef} onSubmit={handleSubmit}>
        <h3>Cadastro</h3>
        <StyledFormSection>
          <h4>Informacoes pessoais</h4>
          <Input label="Nome" name="name" placeholder="Ex: Samuel Leão" />
          <Input
            label="Email"
            name="email"
            placeholder="Ex: samuel@kenzie.com.br"
          />
          <Input
            label="CPF"
            name="cpf"
            placeholder="000.000.000-00"
            mask={cpfMask}
            iso={cpfIso}
            maxLength={14}
          />
          <Input
            label="Celular"
            name="phone"
            placeholder="(DD) 90000-0000"
            mask={phoneMask}
            iso={onlyNumbers}
            maxLength={15}
          />
          <Input
            label="Data de Nascimento"
            name="birth_date"
            placeholder="00/00/00"
          />
          <Input
            label="Descricao"
            name="description"
            placeholder="Digitar descrição"
          />
        </StyledFormSection>
        <StyledFormSection>
          <h4>Informacoes de endereco</h4>
          <Input
            label="CEP"
            name="zip_code"
            placeholder="00000-000"
            mask={cepMask}
            iso={cepIso}
            maxLength={9}
          />
          <div>
            <Input label="Estado" name="state" placeholder="Digitar Estado" />
            <Input label="Cidade" name="city" placeholder="Digitar cidade" />
          </div>
          <Input label="Rua" name="street" placeholder="Digitar rua" />
          <div>
            <Input label="Número" name="number" placeholder="Digitar número" />
            <Input
              label="Complemento"
              name="complement"
              placeholder="Ex: apart 307"
            />
          </div>
        </StyledFormSection>
        <StyledFormSection>
          <h4>Tipo de conta</h4>
          <StyledRoot
            type="single"
            onValueChange={(value: AccountType) => {
              setAccountType(value);
            }}
            defaultValue={accountType}
          >
            <StyledItem value={AccountType.BUYER} name="account_type">
              Comprador
            </StyledItem>
            <StyledItem value={AccountType.SELLER} name="account_type">
              Vendedor
            </StyledItem>
          </StyledRoot>
          <Input
            label="Senha"
            name="password"
            placeholder="Digitar senha"
            type="password"
          />
          <Input
            label="Confirmar Senha"
            name="confirm_password"
            placeholder="Digitar senha"
            type="password"
          />
        </StyledFormSection>
        <Button
          layout={ButtonVariation.PRIMARY}
          type="submit"
          id="submitButton"
        >
          Finalizar cadastro
        </Button>
      </StyledFormContainer>
      <GlobalLoader isLoading={isLoading} />
    </Container>
  );
};

export default RegisterForm;
