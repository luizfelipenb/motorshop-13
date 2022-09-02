import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../core/providers/Auth";
import { loginFormValidator } from "../../core/validators/loginFormValidator";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";
import { UserLogin } from "../../interfaces/user-interfaces";
import { errorFeedback } from "../../utils/errorFeedback";
import { errorFeedbackWithValidator } from "../../utils/errorFeedbackWithValidator";
import { toast, ToastVariants } from "../../utils/toast";
import { Button } from "../button";
import Input from "../input";
import GlobalLoader from "../loader";

import { Container, StyledFormContainer, StyledSignUpSpan } from "./styles";

const FormLogin: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const formRef = React.useRef({} as any);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  // !isAuthenticated && navigate("/");

  const handleLogin = React.useCallback(async (data: UserLogin) => {
    try {
      await loginFormValidator(data);

      setIsLoading(true);

      await login(data).then(() => {
        toast({
          title: "Sucesso",
          message: "Logado com sucesso",
          variant: ToastVariants.SUCCESS,
        });
        navigate("/");
      });
    } catch (err) {
      errorFeedbackWithValidator(err, formRef);
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <Container>
      <StyledFormContainer onSubmit={handleLogin} ref={formRef}>
        <h3>Login</h3>
        <Input label="Usuario" name="email" placeholder="Digitar usuario" />
        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="Digitar senha"
        />

        <StyledSignUpSpan>Esqueci minha senha</StyledSignUpSpan>

        <Button layout={ButtonVariation.PRIMARY}>Entrar</Button>
        <span>Ainda nao possui conta?</span>
        <Button
          layout={ButtonVariation.GAYSCALE}
          onClick={() => navigate("/register")}
        >
          Cadastrar
        </Button>
      </StyledFormContainer>
      <GlobalLoader isLoading={isLoading} />
    </Container>
  );
};

export default FormLogin;
