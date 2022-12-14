import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 20000;
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;
