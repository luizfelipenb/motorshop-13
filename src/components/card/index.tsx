import React from "react";

import {
  Container,
  CardWrapper,
  StyledClockCount,
  StyledDescription,
  StyledTagsContainer,
  StyledTags,
  StyledPrice,
  StyledCardAction,
  StyledImgDiv,
} from "./styles";

import { FaRegClock } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import ProfileLogger from "../profile-logger";

const Card: React.FC<{ auction?: boolean }> = ({ auction }) => {
  return (
    <Container
      auction={auction}
      imgURL="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960"
    >
      {!auction && (
        <StyledImgDiv imgURL="https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/02-images/cruze-sport6-rs-carros.jpg?imwidth=960" />
      )}
      <CardWrapper auction={auction}>
        {auction && (
          <StyledClockCount>
            <FaRegClock size={25} />
            <span>01:58:00</span>
          </StyledClockCount>
        )}

        <StyledDescription auction={auction}>
          <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
        </StyledDescription>
        <ProfileLogger auction={auction} name="Marcelo Alves" />
        <StyledTagsContainer auction={auction}>
          <StyledTags>
            <span>2013</span>
            <span>0 KM</span>
          </StyledTags>
          <StyledPrice auction={auction}>R$ 78.500,00</StyledPrice>
        </StyledTagsContainer>
      </CardWrapper>
      <StyledCardAction auction={auction}>
        Acessar página do leilão <BsArrowRight />
      </StyledCardAction>
    </Container>
  );
};

export default Card;
