import { useField } from "@unform/core";
import React from "react";
import { StyledButton } from "./styles";

interface PropsLike {
  children: React.ReactNode;
  layout?: string;
  name?: string;
}

type Props = PropsLike & JSX.IntrinsicElements["button"];

export const Button: React.FC<Props> = ({
  children,
  name,
  layout,
  ...props
}) => {
  return (
    <StyledButton layout={layout} {...(props as any)}>
      {children}
    </StyledButton>
  );
};
