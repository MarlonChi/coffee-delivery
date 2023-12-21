import styled, { css } from "styled-components";

export const OrderItemContainer = styled.div`
  ${() => css`
    display: flex;
    gap: 2rem;

    img {
      width: 6.4rem;
    }
  `}
`;

export const Actions = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
  `}
`;

export const Inputs = styled.div`
  ${() => css`
    margin-top: 0.8rem;

    display: flex;
    gap: 0.8rem;
  `}
`;

export const RemoveButton = styled.button`
  ${({ theme }) => css`
    border-radius: 6px;
    padding: 0.8rem;
    border: none;
    background: ${theme.colors.baseButton};

    font-family: "Roboto";
    font-size: ${theme.fonts.size.textXs};
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 4px;

    cursor: pointer;

    svg {
      color: #8047f8;
    }

    &:hover {
      transition: background 0.4s;
      background: ${theme.colors.baseHover};
    }
  `}
`;

export const Price = styled.span`
  ${({ theme }) => css`
    font-family: "Roboto";
    font-size: ${theme.fonts.size.textM};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    color: ${theme.colors.baseText};
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
