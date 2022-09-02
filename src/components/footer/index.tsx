import React from "react";
import Logo from "../../assets/footerLogo.svg";

import { Container, StyledButtonBackTop } from "./styles";

import { RiArrowDropUpLine } from "react-icons/ri";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container>
      <img src={Logo} alt="logo footer" />
      <span>© 2022 - Todos os direitos reservados.</span>
      <StyledButtonBackTop onClick={scrollToTop}>
        <RiArrowDropUpLine size={25} />
      </StyledButtonBackTop>
    </Container>
  );
};

export default Footer;
