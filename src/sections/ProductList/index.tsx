import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../store/products/action";
import { RootState } from "../../store/configureStore";

import { Container } from "../../components/Container";
import Heading from "../../components/Heading";
import ProductCard from "../../components/ProductCard";

import { ProductListProps } from "./types";

import * as S from "./styles";

const ProductList = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <S.ProductListContainer>
      <Container>
        <Heading size="large">Nossos cafés</Heading>
        {loading && <div>Carregando...</div>}
        {error && <div>Deu errado</div>}
        {data && (
          <S.Products>
            {data.map((item: ProductListProps) => (
              <ProductCard key={item.name} product={item} />
            ))}
          </S.Products>
        )}
      </Container>
    </S.ProductListContainer>
  );
};

export default ProductList;
