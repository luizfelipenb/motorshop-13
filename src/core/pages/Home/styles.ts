import styled from "styled-components";

export const Container = styled.main<{ isAuthenticated: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 87px;

  background: ${(props) =>
    props.isAuthenticated && props.theme.colors.gradients.announceGradient};
`;

export const StyledProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
