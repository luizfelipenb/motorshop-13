import React from "react";
import ProfileLogger from "../profile-logger";
import DropDownUserMenu from "../dropDownUserMenu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../core/providers/Auth";
import { errorFeedback } from "../../utils/errorFeedback";
import {
  StyledAuthManagement,
  StyledDivider,
  StyledTrigger,
  StyledNavigationRoot,
  StyledNavigationList,
  StyledNavigationItem,
} from "./styles";
import { UserData } from "../../interfaces/user-interfaces";

type Props = JSX.IntrinsicElements["header"];

export const HeaderOptions: React.FC<Props> = ({ ...props }) => {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("@user:name") || " "
  );
  const [userData, setUserData] = React.useState({} as UserData);

  const { isAuthenticated, fetchUserData } = useAuth();
  const navigate = useNavigate();

  const handleUserProfile = React.useCallback(async () => {
    await fetchUserData()
      .then((response) => {
        localStorage.setItem("@user:name", response.name);
        setUserName(response.name);
        setUserData(response);
      })
      .catch(errorFeedback);
  }, [userName]);

  React.useEffect(() => {
    if (isAuthenticated) {
      handleUserProfile();
    }
  }, [handleUserProfile]);
  return (
    <StyledNavigationRoot {...(props as any)}>
      <StyledNavigationList>
        <StyledNavigationItem>Carros</StyledNavigationItem>
        <StyledNavigationItem>Motos</StyledNavigationItem>
        <StyledNavigationItem>Leilão</StyledNavigationItem>
      </StyledNavigationList>
      <StyledDivider />
      {isAuthenticated ? (
        <DropdownMenu.Root>
          <StyledTrigger>
            <ProfileLogger name={userName} />
          </StyledTrigger>
          <DropDownUserMenu userData={userData} />
        </DropdownMenu.Root>
      ) : (
        <StyledAuthManagement>
          <span onClick={() => navigate("/login")}>Fazer Login</span>
          <button onClick={() => navigate("/register")}>Cadastrar</button>
        </StyledAuthManagement>
      )}
    </StyledNavigationRoot>
  );
};
