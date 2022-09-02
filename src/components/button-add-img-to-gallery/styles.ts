import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  margin-left: 1.5rem;
  align-items: center;
  border-radius: 4px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  font-family: Inter;
  color: ${(props) => props.theme.colors.brand.brand1};
  background-color: ${(props) => props.theme.colors.brand.brand4};
  align-self: flex-start;
`;
