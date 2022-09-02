import { createGlobalStyle } from "styled-components";

export const ToastStyles = createGlobalStyle`
@keyframes ToastIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes ToastOut {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  .toast_custom {
    background-color: red;
    margin-right: 2rem;
    margin-top: 2rem;
    padding: 1rem;
    color: ${(props) => props.theme.colors.white};
    border-radius: 8px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    animation: ToastIn 300ms;
    transition: all .4s;

    &.toast_out {
      animation: ToastOut 200ms;
    }

    > span {
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    > p {
      font-size: 0.875rem;
    }

    &:first-child {
      margin-top: 2rem;
    }

    &.info {
      background-color: ${(props) => props.theme.colors.feedback.sucess2};
    }

    &.success {
      background-color: ${(props) => props.theme.colors.feedback.sucess1};
    }

    &.error {
      background-color: ${(props) => props.theme.colors.feedback.alert1};
    }

    &.warn {
      background-color: ${(props) => props.theme.colors.feedback.alert2};
    }
  }
`;
