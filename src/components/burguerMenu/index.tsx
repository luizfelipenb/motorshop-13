import React from "react";
import { Container } from "./styles";

const BurguerMenu: React.FC<{ open: boolean }> = ({ open }) => {
  return (
    <Container open={open}>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  );
};

export default BurguerMenu;
