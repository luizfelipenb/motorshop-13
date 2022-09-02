import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled(DropdownMenu.Content)`
  background: ${(props) => props.theme.colors.grey.grey9};
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 22px;
`;

export const StyledDropDownItem = styled(DropdownMenu.Item)`
  cursor: pointer;
`;
