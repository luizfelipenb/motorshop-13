import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.8rem 0.8rem;
`;

export const DialogTitle = styled(Dialog.Title)`
  font-size: 1rem;
`;
export const DialogClose = styled(Dialog.Close)`
  background-color: transparent;
  > svg {
    color: ${(props) => props.theme.colors.grey.grey4};
    cursor: pointer;
  }
`;
