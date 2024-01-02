import * as S from "./styles";

import { InputProps } from "./types";

const Input = ({
  name,
  placeholder,
  disabled,
  fullWidth,
  ...props
}: InputProps) => {
  return (
    <S.Input
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
