import styled from "styled-components";

export const Container = styled.div`
  padding: 53px 17.5px 70px 17.5px;
  background-color: ${(props) => props.theme.colors.brand.brand2};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  gap: 52px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  > p {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    max-width: 748px;
  }
  > span {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
  }
  > nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 22px;
  }

  @media screen and (min-width: 900px) {
    > nav {
      flex-direction: row;
      justify-content: center;
    }
  }
`;
