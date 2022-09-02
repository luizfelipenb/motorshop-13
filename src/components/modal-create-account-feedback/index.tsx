import React from "react";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";
import { Button } from "../button";
import ModalHeader from "../header-modal";
import { ModalOverlay } from "../modal-overlay";

import { Container, StyledFeedbackContent } from "./styles";

const ModalCreateAccountFeedback: React.FC = () => {
  return (
    <ModalOverlay>
      <Container>
        <ModalHeader title="Sucesso!" />
        <StyledFeedbackContent>
          <h3>Sua conta foi criada com sucesso!</h3>

          <p>Agora você poderá ver seus negócios crescendo em grande escala</p>

          <Button layout={ButtonVariation.PRIMARY}>Ir para o login</Button>
        </StyledFeedbackContent>
      </Container>
    </ModalOverlay>
  );
};

export default ModalCreateAccountFeedback;
