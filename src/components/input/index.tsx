import { useField } from "@unform/core";
import React from "react";

import { Container, StyledInputContainer, ErrorSpan } from "./styles";

interface PropsLike {
  label: string;
  name: string;
  mask?: (value: string) => string;
  iso?: (value: string) => string;
}

type InputProps = React.InputHTMLAttributes<HTMLDivElement> & PropsLike;

const Input: React.FC<InputProps> = ({ label, name, mask, iso, ...rest }) => {
  const inputRef = React.useRef({} as any);

  const { fieldName, registerField, error } = useField(name);

  const _change = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.target.value = mask
        ? mask(event.target.value)
        : event.target.value || "";
    },
    [mask]
  );

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return iso ? iso(ref.current.value) : ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor="inputForm">{label}</label>
      <StyledInputContainer>
        <input
          name={name}
          ref={inputRef}
          defaultValue=""
          onChange={_change}
          {...rest}
        />
      </StyledInputContainer>
      {error && <ErrorSpan error={!!error}>{error}</ErrorSpan>}
    </Container>
  );
};

export default Input;
