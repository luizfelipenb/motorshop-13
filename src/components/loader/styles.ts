import styled from "styled-components";

export const Container = styled.div`
  z-index: 500;
  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all linear 1s;

  > span {
    font-family: "Lexend" sans-serif;
    font-size: 17px;
    font-weight: 600;
  }
`;
