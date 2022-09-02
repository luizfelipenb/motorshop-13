import styled from "styled-components";

export const Container = styled.div`
  width: 347px;
  height: 287px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 900px) {
    width: 520px;
  }
`;

export const StyledFeedbackContent = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.125rem;
  margin: 0 26px 42px 24px;
  > h3 {
    color: ${(props) => props.theme.colors.grey.grey1};
    font-size: 1rem;
  }
  > p {
    color: ${(props) => props.theme.colors.grey.grey2};
    font-size: 1rem;
  }
`;
