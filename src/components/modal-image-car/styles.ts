import styled from "styled-components";

export const Container = styled.div`
  width: 344px;
  height: 365px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 8px;

  @media screen and (min-width: 900px) {
    width: 520px;
    height: 354px;
  }
`;
