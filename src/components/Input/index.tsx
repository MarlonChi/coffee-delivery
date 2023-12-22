import * as S from "./styles";

import { InputProps } from "./types";

const Input = ({
  name,
  placeholder,
  type,
  disabled,
  fullWidth,
  ...props
}: InputProps) => {
  return (
    <S.Input
      type={type}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      fullWidth={fullWidth}
      {...props}
    />
  );
};

export default Input;
