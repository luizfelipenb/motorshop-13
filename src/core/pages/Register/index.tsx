import React from "react";
import Footer from "../../../components/footer";
import { Header } from "../../../components/header";
import RegisterForm from "../../../components/register-form";

import { Container } from "./styles";

const Register: React.FC = () => {
  return (
    <Container>
      <Header />
      <RegisterForm />
      <Footer />
    </Container>
  );
};

export default Register;
