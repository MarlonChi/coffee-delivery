import * as S from "./styles";

import { InputProps } from "./types";

const Input = ({
  name,
  placeholder,
  type,
  disabled,
  fullWidth,
}: InputProps) => {
  return (
    <S.Input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
