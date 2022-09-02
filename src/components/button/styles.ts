import styled from "styled-components";
import { ButtonVariation } from "../../enum/modal-edit-toggle-variations";

interface PropsLike {
  layout?: string;
  theme: string;
}

export const StyledButton = styled.button<PropsLike>`
  border: 1px solid
    ${(props) =>
      props.layout == ButtonVariation.PRIMARY
        ? props.theme.colors.brand.brand1
        : "none"};
  color: ${(props) =>
    props.layout == ButtonVariation.PRIMARY
      ? props.theme.colors.white
      : props.layout == ButtonVariation.GAYSCALE
      ? props.theme.colors.grey.grey2
      : props.layout == ButtonVariation.ALERT
      ? props.theme.colors.feedback.alert1
      : props.layout == ButtonVariation.BOLDPURPLE && props.theme.colors.white};

  width: 146px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  font-family: Inter;
  background-color: ${(props) =>
    props.layout == ButtonVariation.PRIMARY
      ? props.theme.colors.brand.brand1
      : props.layout == ButtonVariation.GAYSCALE
      ? props.theme.colors.grey.grey6
      : props.layout == ButtonVariation.ALERT
      ? props.theme.colors.feedback.alert2
      : props.layout == ButtonVariation.BOLDPURPLE &&
        props.theme.colors.brand.brand4};
`;
