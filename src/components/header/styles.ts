import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 20px;
  font-family: "Inter", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.grey5};
  background-color: ${(props) => props.theme.colors.grey.grey10};

  .menuOptionsMobile {
    width: 400px;
    margin-top: 1.75rem;
  }

  .menuOptionsDesktop {
    display: none;
  }

  @media (min-width: 900px) {
    .menuIcon {
      display: none;
    }
    .menuOptionsDesktop {
      display: flex;
    }
  }
`;

export const StyledDropdownRoot = styled(DropdownMenu.Root)`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
export const StyledDropdownContent = styled(DropdownMenu.Content)``;
export const StyledDropdownItem = styled(DropdownMenu.Item)``;
export const StyledDropdownTrigger = styled(DropdownMenu.Trigger)`
  background-color: transparent;
  @media screen and (min-width: 900px) {
    display: none;
  }
`;
