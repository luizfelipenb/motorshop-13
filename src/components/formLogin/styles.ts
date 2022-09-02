import styled from "styled-components";
import { Form } from "@unform/web";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const StyledFormContainer = styled(Form)`
  padding: 28px;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 343px;
  height: 542px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.grey.grey10};
  gap: 21px;
  > h3 {
    align-self: flex-start;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }

  > div {
    width: 100%;
  }

  > button {
    width: 100%;
  }
`;

export const StyledSignUpSpan = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.theme.colors.grey.grey2};
  align-self: flex-end;
  cursor: pointer;
`;
