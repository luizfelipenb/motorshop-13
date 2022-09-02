import React from "react";
import ModalHeader from "../header-modal";

import {
  Container,
  StyledItem,
  StyledRoot,
  StyledToggleDiv,
  StyledInputDiv,
  StyledDivGrid,
  StyledActionDiv,
} from "./styles";

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

  const formRef = React.useRef({} as any);

  return (
    <ModalOverlay>
      <Container ref={formRef} onSubmit={() => console.log("submited")}>
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
            <StyledItem value={TypeAnnounceVariation.SALE}>Venda</StyledItem>
            <StyledItem value={TypeAnnounceVariation.AUCTION}>
              Leilao
            </StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <StyledInputDiv>
          <h3>Informacoes do veiculo</h3>
          <Input label="Titulo" name="title" />
          <StyledDivGrid>
            <Input label="Ano" name="year" />
            <Input label="Quilometragem" name="km" />
            <Input label="Preco" name="price" className="lastChild" />
          </StyledDivGrid>
          <Input label="Decricao" name="description" />
        </StyledInputDiv>
        <StyledToggleDiv>
          <h3>Tipo de Veiculo</h3>
          <StyledRoot
            type="single"
            onValueChange={(value: TypeVeicleVariation) => {
              setTypeVeicle(value);
            }}
            defaultValue={typeVeicle}
          >
            <StyledItem value={TypeVeicleVariation.CAR}>Carro</StyledItem>
            <StyledItem value={TypeVeicleVariation.MOTOCYCLE}>Moto</StyledItem>
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
            <StyledItem value={TypePublishedVariation.YES}>Sim</StyledItem>
            <StyledItem value={TypePublishedVariation.NO}>Nao</StyledItem>
          </StyledRoot>
        </StyledToggleDiv>
        <StyledInputDiv>
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
        </StyledInputDiv>
        <ButtonAddImgToGallery>
          Adicionar campo para imagem da galeria
        </ButtonAddImgToGallery>

        <StyledActionDiv>
          <Button layout={ButtonVariation.GAYSCALE}>Excluir anúncio</Button>
          <Button layout={ButtonVariation.BOLDPURPLE}>Salvar alterações</Button>
        </StyledActionDiv>
      </Container>
    </ModalOverlay>
  );
};

export default ModalEditAnnounce;
