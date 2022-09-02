import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Form } from "@unform/web";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 97px;
  padding: 46px 0 73px 0;
`;

export const StyledFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-width: 343px;
  max-width: 411px;
  background-color: ${(props) => props.theme.colors.grey.grey10};
  padding: 44px 48px;
  border-radius: 4px;

  #submitButton {
    width: 100%;
  }
`;

export const StyledFormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    gap: 8px;
  }
`;

export const StyledRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 6px;
`;

export const StyledItem = styled(ToggleGroup.Item)`
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors.grey.grey2};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey.grey0};
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
  &[data-state="on"] {
    background-color: ${(props) => props.theme.colors.brand.brand1};
    color: ${(props) => props.theme.colors.white};
    border: none;
  }
`;
