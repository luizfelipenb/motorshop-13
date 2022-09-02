import React from "react";

import { Container } from "./styles";

const SectionCards: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <Container>
      <h3>{title}</h3>
      <div>{children}</div>
    </Container>
  );
};

export default SectionCards;
