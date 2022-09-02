import React from "react";
import { BrandIcon } from "../brandIcon";
import {
  StyledHeader,
  StyledDropdownContent,
  StyledDropdownRoot,
  StyledDropdownItem,
  StyledDropdownTrigger,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { HeaderOptions } from "../headerOptions";
import BurguerMenu from "../burguerMenu";

type Props = JSX.IntrinsicElements["header"];

export const Header: React.FC<Props> = ({ ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <StyledHeader {...(props as any)}>
        <BrandIcon onClick={() => navigate("/")} />
        <StyledDropdownRoot onOpenChange={setIsMenuOpen}>
          <StyledDropdownContent>
            <StyledDropdownItem>
              <HeaderOptions className="menuOptionsMobile" />
            </StyledDropdownItem>
          </StyledDropdownContent>
          <StyledDropdownTrigger>
            <BurguerMenu open={isMenuOpen} />
          </StyledDropdownTrigger>
        </StyledDropdownRoot>
        <HeaderOptions className="menuOptionsDesktop" />
      </StyledHeader>
    </>
  );
};
