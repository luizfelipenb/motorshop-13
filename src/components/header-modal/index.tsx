import React from "react";
import { Container, DialogTitle, DialogClose } from "./styles";
import { GrClose } from "react-icons/gr";

const ModalHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Container>
      <DialogTitle>{title}</DialogTitle>
      <DialogClose>
        <GrClose size={20} />
      </DialogClose>
    </Container>
  );
};

export default ModalHeader;
