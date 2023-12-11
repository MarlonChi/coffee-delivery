import * as S from "./styles";
import { ProductTagProps } from "./types";

const ProductTag = ({ label }: ProductTagProps) => {
  return <S.ProductTag>{label}</S.ProductTag>;
};

export default ProductTag;
