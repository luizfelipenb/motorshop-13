import React from "react";
import { useAuth } from "../../core/providers/Auth";
import { UserData } from "../../interfaces/user-interfaces";
import { errorFeedback } from "../../utils/errorFeedback";
import ModalEditAnnounce from "../modal-edit-announce";
import ProfileLogger from "../profile-logger";

import {
  Container,
  StyledProfileDiv,
  DialogRoot,
  DialogTrigger,
  DialogContent,
} from "./styles";

const ProfileManagementAnnounceCard: React.FC = () => {
  const [userName, setUserName] = React.useState(
    localStorage.getItem("@user:name") || " "
  );
  const [userData, setUserData] = React.useState({} as UserData);

  const { isAuthenticated, fetchUserData } = useAuth();

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
    <Container>
      <StyledProfileDiv>
        <ProfileLogger name={userName} />
        {userData.isSeller && <span>Anunciante</span>}
      </StyledProfileDiv>
      <p>{userData.description}</p>
      <DialogRoot>
        {userData.isSeller && <DialogTrigger>Criar anuncio</DialogTrigger>}

        <DialogContent>
          <ModalEditAnnounce />
        </DialogContent>
      </DialogRoot>
    </Container>
  );
};

export default ProfileManagementAnnounceCard;
