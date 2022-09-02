import React from "react";
import Card from "../../../components/card";
import Footer from "../../../components/footer";
import { Header } from "../../../components/header";
import IntroContent from "../../../components/intro-content";
import ProfileManagementAnnounceCard from "../../../components/profileManagementAnnounceCard";
import SectionCards from "../../../components/section-cards";
import { useAuth } from "../../providers/Auth";

import { Container, StyledProfileDiv } from "./styles";

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    //TO DO:
    // - QUANDO FIZER O FETCH DOS LEILOES PASSAR OS DADOS COMO PROPS PARA O CARD E REFATORAR COM OS DADOS DINAMICOS
    <Container isAuthenticated={isAuthenticated}>
      <StyledProfileDiv>
        <Header />
        {isAuthenticated ? <ProfileManagementAnnounceCard /> : <IntroContent />}
      </StyledProfileDiv>
      <SectionCards title="Leilao">
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
        <Card auction />
      </SectionCards>
      <SectionCards title="Carros">
        <Card />
      </SectionCards>
      <SectionCards title="Motos">
        <Card />
        <Card />
      </SectionCards>
      <Footer />
    </Container>
  );
};

export default Home;
