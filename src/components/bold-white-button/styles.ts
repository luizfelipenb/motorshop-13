import styled from "styled-components";

export const Container = styled.button`
  color: ${(props) => props.theme.colors.grey.grey10};
  border: 2px solid ${(props) => props.theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  background-color: transparent;
  border-radius: 4px;
  width: 90%;
  padding: 10px 0;

  @media screen and (min-width: 900px) {
    max-width: 178px;
  }
`;
