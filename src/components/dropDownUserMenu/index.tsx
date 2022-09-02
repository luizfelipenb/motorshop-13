import React from "react";
import { useAuth } from "../../core/providers/Auth";
import { UserData } from "../../interfaces/user-interfaces";
import GlobalLoader from "../loader";

import { Container, StyledDropDownItem } from "./styles";

const DropDownUserMenu: React.FC<{ userData: UserData }> = ({ userData }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { logOut } = useAuth();

  const handleLogOut = React.useCallback(() => {
    setIsLoading(true);

    setTimeout(() => {
      logOut();
      setIsLoading(false);
    }, 500);
  }, []);
  return (
    <>
      <Container>
        <StyledDropDownItem>Editar Perfil</StyledDropDownItem>
        <StyledDropDownItem>Editar endereço</StyledDropDownItem>
        <StyledDropDownItem>
          {userData.isSeller ? "Meus anuncios" : "Minhas Compras"}
        </StyledDropDownItem>
        <StyledDropDownItem onClick={handleLogOut}>Sair</StyledDropDownItem>
      </Container>
      <GlobalLoader isLoading={isLoading} />
    </>
  );
};

export default DropDownUserMenu;
