import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0.8rem;
  font-size: 1rem;

  > svg {
    color: ${(props) => props.theme.colors.grey.grey4};
    cursor: pointer;
  }
`;
