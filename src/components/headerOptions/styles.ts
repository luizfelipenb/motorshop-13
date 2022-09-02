import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const StyledNavigationRoot = styled(NavigationMenu.Root)`
  display: flex;
  flex-direction: column;
  gap: 44px;
  height: 100%;
  padding: 20px 30px 0px 20px;
  font-family: "Inter", sans-serif;
  color: ${(props) => props.theme.colors.grey.grey2};
  background-color: ${(props) => props.theme.colors.grey.grey10};

  @media screen and (min-width: 900px) {
    flex-direction: row;
    padding-top: 0;
  }
`;

export const StyledNavigationList = styled(NavigationMenu.List)`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 44px;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledNavigationItem = styled(NavigationMenu.Item)`
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;
  @media screen and (min-width: 900px) {
    font-weight: 400;
  }
`;

export const StyledAuthManagement = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.grey.grey4};
  display: flex;
  gap: 44px;
  height: 100%;
  flex-direction: column;
  padding: 30px;
  padding-left: 0;
  > span {
    display: flex;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    color: ${(props) => props.theme.colors.grey.grey2};
    cursor: pointer;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    line-height: 0px;
    background-color: transparent;
    height: 40px;
    border: 1px solid ${(props) => props.theme.colors.grey.grey4};
    border-radius: 4px;
    padding: 1rem;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    padding: 0;

    align-items: center;

    border: none;

    > span {
      justify-content: center;
      color: ${(props) => props.theme.colors.brand.brand1};
    }
    > button {
      align-items: center;
      justify-content: center;
    }
  }
`;

export const StyledDivider = styled.div`
  width: 2px;
  height: 79px;
  background-color: ${(props) => props.theme.colors.grey.grey6};

  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

export const StyledTrigger = styled(DropdownMenu.Trigger)`
  border-top: 2px solid ${(props) => props.theme.colors.grey.grey4};
  padding: 32px 0;
  background-color: ${(props) => props.theme.colors.grey.grey10};

  @media screen and (min-width: 900px) {
    padding: 0;
    border: none;
  }
`;
