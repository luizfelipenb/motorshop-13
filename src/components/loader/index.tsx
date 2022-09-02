import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { Container } from "./styles";

const GlobalLoader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <Container>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        ariaLabel="three-dots-loading"
        color="#4529E6"
        visible={isLoading}
      />
      <span>Loading</span>
    </Container>
  );
};

export default GlobalLoader;
