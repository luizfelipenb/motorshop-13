import React from "react";
import BoldWhiteButton from "../bold-white-button";

import { Container } from "./styles";

const IntroContent: React.FC = () => {
  return (
    <Container>
      <p>Velocidade e experiência em um lugar feito para você</p>
      <span>Um ambiente feito para você explorar o seu melhor</span>
      <nav>
        <BoldWhiteButton>Leilao</BoldWhiteButton>
        <BoldWhiteButton>Carros</BoldWhiteButton>
        <BoldWhiteButton>Motos</BoldWhiteButton>
      </nav>
    </Container>
  );
};

export default IntroContent;
