import styled, { css } from "styled-components";

export const ProductCardContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 6px 36px;
    background: ${theme.colors.baseCard};
    max-width: 25.6rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    padding: 0 2rem 2rem 2rem;
  `}
`;

export const Image = styled.img`
  ${() => css`
    margin-top: -2rem;
  `}
`;

export const ProductTags = styled.div`
  ${() => css`
    margin-top: 1.2rem;
  `}
`;

export const CardDescription = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;
    text-align: center;

    h3 {
      font-size: ${theme.fonts.size.titleS};
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      color: ${theme.colors.baseSubtitle};
    }

    p {
      margin-top: 8px;
      font-size: ${theme.fonts.size.textS};
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${theme.colors.baseLabel};
    }
  `}
`;

export const CardFooter = styled.div`
  ${() => css`
    margin-top: 3.3rem;
    display: flex;
    align-items: center;
    gap: 8px;
  `}
`;

export const ProductPrice = styled.div`
  ${({ theme }) => css`
    font-family: "Baloo 2";
    font-size: ${theme.fonts.size.titleM};
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  `}
`;

export const AddToCart = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.purpleDark};
    color: ${theme.colors.white};
    border: none;
    padding: 8px;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: ${theme.colors.purple};
      color: ${theme.colors.white};
    }
  `}
`;

export const QuantityInputContainer = styled.div`
  ${({ theme }) => css`
    max-width: 7.2rem;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 4px;

    background: ${theme.colors.baseButton};
    padding: 0.8rem;
    border-radius: 6px;
  `}
`;

const ButtonBase = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.purpleDark};
    }
  `}
`;

export const Decrease = styled(ButtonBase)``;

export const Increase = styled(ButtonBase)``;

export const Quantity = styled.input`
  ${({ theme }) => css`
    all: unset;
    width: 20px;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${theme.colors.baseTitle}

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  `}
`;
