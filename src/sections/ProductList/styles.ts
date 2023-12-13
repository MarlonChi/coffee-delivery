import styled, { css } from "styled-components";

export const ProductListContainer = styled.div`
  ${() => css``}
`;

export const Products = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2.4rem;
    margin-top: 2.4rem;
  `}
`;
