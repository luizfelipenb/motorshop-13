import styled from "styled-components";

export const Container = styled.div<{ size: number; color: string }>`
  width: ${(props) => (props.size ? `${props.size}px` : "2.5rem")};
  height: ${(props) => (props.size ? `${props.size}px` : "2.5rem")};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: ${(props) => (props.size ? `${props.size / 2.4}px` : "14px")};
    letter-spacing: 1px;
    color: ${(props) => props.theme.colors.white};
    font-weight: 500;
    line-height: 24px;
  }
`;
