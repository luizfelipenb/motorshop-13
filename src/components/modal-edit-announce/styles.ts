import styled from "styled-components";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 346px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding-bottom: 32px;
  margin-top: 300px;
`;

export const StyledToggleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledRoot = styled(ToggleGroup.Root)`
  display: flex;
  gap: 6px;
`;

export const StyledItem = styled(ToggleGroup.Item)`
  border-radius: 4px;
  &[data-state="on"] {
    > button {
      background-color: ${(props) => props.theme.colors.brand.brand1};
      color: ${(props) => props.theme.colors.white};
      border: none;
    }
  }
  > button {
    border: 2px solid ${(props) => props.theme.colors.grey.grey2};
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.grey.grey0};
  }
`;
