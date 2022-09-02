import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  background-color: ${(props) => props.theme.colors.grey.grey0};
  padding: 45px 55.5px;

  > span {
    color: ${(props) => props.theme.colors.white};
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    max-height: 140px;
  }
`;

export const StyledButtonBackTop = styled.button`
  width: 53px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.grey.grey1};
  border-radius: 4px;
  > svg {
    color: ${(props) => props.theme.colors.white};
  }
`;
