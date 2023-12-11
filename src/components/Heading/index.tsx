import * as S from "./styles";

import { HeadingProps } from "./types";

const Heading = ({ children, size = "large" }: HeadingProps) => {
  return <S.HeadingContainer size={size}>{children}</S.HeadingContainer>;
};

export default Heading;
