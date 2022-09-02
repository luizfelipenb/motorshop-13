import React from "react";
import Footer from "../../../components/footer";
import FormLogin from "../../../components/formLogin";
import { Header } from "../../../components/header";

import { Container } from "./styles";

const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <FormLogin />
      <Footer />
    </Container>
  );
};

export default Login;
