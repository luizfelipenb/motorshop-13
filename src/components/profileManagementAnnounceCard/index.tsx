import React from "react";
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
  return (
    <Container>
      <StyledProfileDiv>
        <ProfileLogger name="Samuel Leao" />
        <span>Anunciante</span>
      </StyledProfileDiv>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
      <DialogRoot>
        <DialogTrigger>Criar anuncio</DialogTrigger>
        <DialogContent>
          <ModalEditAnnounce />
        </DialogContent>
      </DialogRoot>
    </Container>
  );
};

export default ProfileManagementAnnounceCard;
