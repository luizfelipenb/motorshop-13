import React from "react";

import { Container } from "./styles";

interface PropsLike {
  children: React.ReactNode;
}

type Props = PropsLike & JSX.IntrinsicElements["button"];

const BoldWhiteButton: React.FC<Props> = ({ children, ...props }) => {
  return <Container {...(props as any)}>{children}</Container>;
};

export default BoldWhiteButton;
