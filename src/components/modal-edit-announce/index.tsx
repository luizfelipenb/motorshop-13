import React from "react";
import ModalHeader from "../header-modal";

import { Container, StyledItem, StyledRoot, StyledToggleDiv } from "./styles";

import {
  ButtonVariation,
  TypeAnnounceVariation,
  TypePublishedVariation,
  TypeVeicleVariation,
} from "../../enum/modal-edit-toggle-variations";
import { Button } from "../button";
import { ModalOverlay } from "../modal-overlay";
import Input from "../input";
import ButtonAddImgToGallery from "../button-add-img-to-gallery";

const ModalEditAnnounce: React.FC = () => {
  const [typeAnnouce, setTypeAnnouce] = React.useState(
    TypeAnnounceVariation.SALE
  );

  const [typeVeicle, setTypeVeicle] = React.useState(TypeVeicleVariation.CAR);

  const [typePublished, setTypePublished] = React.useState(
    TypePublishedVariation.NO
  );

  return (
    <ModalOverlay>
      <Container>
        <ModalHeader title="Editar anuncio" />
        <StyledToggleDiv>
          <h3>Tipo de anuncio</h3>
          <StyledRoot
            type="single"
            onValueChange={(value: TypeAnnounceVariation) => {
              setTypeAnnouce(value);
            }}
            defaultValue={typeAnnouce}
          >
            <StyledItem value={TypeAnnounceVariation.SALE}>
              <Button layout={ButtonVariation.PRIMARY}>Venda</Button>
            </StyledItem>
            <StyledItem value={TypeAnnounceVariation.AUCTION}>
              <Button layout={ButtonVariation.PRIMARY}>Leilao</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <div>
          <h3>Informacoes do veiculo</h3>
          <Input label="Titulo" name="title" />
          <Input label="Ano" name="year" />
          <Input label="Quilometragem" name="km" />
          <Input label="Preco" name="price" />
          <Input label="Decricao" name="description" />
        </div>
        <StyledToggleDiv>
          <h3>Tipo de Veiculo</h3>
          <StyledRoot
            type="single"
            onValueChange={(value: TypeVeicleVariation) => {
              setTypeVeicle(value);
            }}
            defaultValue={typeVeicle}
          >
            <StyledItem value={TypeVeicleVariation.CAR}>
              <Button layout={ButtonVariation.PRIMARY}>Carro</Button>
            </StyledItem>
            <StyledItem value={TypeVeicleVariation.MOTOCYCLE}>
              <Button layout={ButtonVariation.PRIMARY}>Moto</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <StyledToggleDiv>
          <StyledRoot
            type="single"
            onValueChange={(value: TypePublishedVariation) => {
              setTypePublished(value);
            }}
            defaultValue={typePublished}
          >
            <StyledItem value={TypePublishedVariation.YES}>
              <Button layout={ButtonVariation.PRIMARY}>Sim</Button>
            </StyledItem>
            <StyledItem value={TypePublishedVariation.NO}>
              <Button layout={ButtonVariation.PRIMARY}>Nao</Button>
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <Input
          label="Imagem da capa"
          name="cover-image"
          placeholder="https://image.com"
        />
        <Input
          label="1 imagem da galeria"
          name="first_image"
          placeholder="https://image.com"
        />
        <Input
          label="2 imagem da galeria"
          name="second_image"
          placeholder="https://image.com"
        />
        <ButtonAddImgToGallery>
          Adicionar campo para imagem da galeria
        </ButtonAddImgToGallery>

        <div>
          <Button layout={ButtonVariation.GAYSCALE}>Excluir anúncio</Button>
          <Button layout={ButtonVariation.BOLDPURPLE}>Salvar alterações</Button>
        </div>
      </Container>
    </ModalOverlay>
  );
};

export default ModalEditAnnounce;
