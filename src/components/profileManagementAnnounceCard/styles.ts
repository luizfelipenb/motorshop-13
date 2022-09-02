import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey.grey10};
  border-radius: 4px;
  padding: 44px 41px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 65px 16px 44px 16px;
  justify-self: center;
  max-width: 1240px;

  @media screen and (min-width: 900px) {
    margin: 75px 181px 100px 181px;
  }
`;

export const StyledProfileDiv = styled.div`
  display: flex;
  gap: 9px;
  > div:first-child {
    > div:first-child {
      padding: 0;
      gap: 24px;
      > div {
        width: 104px;
        height: 104px;
        align-self: flex-start;
        > span {
          font-weight: 500;
          font-size: 36px;
        }
      }
      flex-direction: column;
      > span {
        font-weight: 600;
        font-size: 20px;
        color: ${(props) => props.theme.colors.grey.grey1};
      }
    }
  }
  > span {
    font-weight: 500;
    font-size: 14px;
    align-self: flex-end;
    padding: 4px 8px;
    background-color: ${(props) => props.theme.colors.brand.brand4};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.brand.brand1};
  }
  > p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 28px;
    color: ${(props) => props.theme.colors.grey.grey2};
  }
`;

export const DialogRoot = styled(Dialog.Root)``;
export const DialogTrigger = styled(Dialog.Trigger)`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.brand.brand1};
  color: ${(props) => props.theme.colors.brand.brand1};
  padding: 1rem 1rem;
  max-width: 146px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  align-self: flex-start;
`;
export const DialogContent = styled(Dialog.Content)``;
