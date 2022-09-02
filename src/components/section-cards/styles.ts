import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  padding-left: 12px;
  > h3 {
    font-weight: 600;
    font-size: 24px;
    color: #000;
  }
  > div {
    display: flex;
    gap: 12px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
