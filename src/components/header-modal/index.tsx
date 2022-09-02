import React from "react";
import { Container } from "./styles";
import { GrClose } from "react-icons/gr";

const ModalHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      <GrClose size={20} />
    </Container>
  );
};

export default ModalHeader;
