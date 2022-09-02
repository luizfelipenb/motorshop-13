import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Form } from "@unform/web";

export const Container = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 346px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding-bottom: 32px;
  margin-top: 80px;

  @media screen and (min-width: 900px) {
    width: 520px;
  }
`;

export const StyledToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 90%;
`;

export const StyledRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 6px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledItem = styled(ToggleGroup.Item)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  padding: 16px 32px;
  border: 2px solid ${(props) => props.theme.colors.grey.grey2};
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.grey.grey0};
  &[data-state="on"] {
    background-color: ${(props) => props.theme.colors.brand.brand1};
    color: ${(props) => props.theme.colors.white};
    border: 2px solid ${(props) => props.theme.colors.brand.brand1};
  }
`;

export const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 90%;
`;

export const StyledDivGrid = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  column-gap: 10px;
  row-gap: 24px;

  > div:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 150px 150px 150px;

    > div:nth-child(3) {
      grid-column-start: auto;
      grid-column-end: auto;
    }
  }
`;

export const StyledActionDiv = styled.div`
  display: flex;
  gap: 8px;
  width: 90%;
`;
