import React from "react";

import { StyledButton } from "./styles";

interface PropsLike {
  children: React.ReactNode;
}

type Props = PropsLike & JSX.IntrinsicElements["button"];

const ButtonAddImgToGallery: React.FC<Props> = ({ children, ...props }) => {
  return <StyledButton {...(props as any)}>{children}</StyledButton>;
};

export default ButtonAddImgToGallery;
