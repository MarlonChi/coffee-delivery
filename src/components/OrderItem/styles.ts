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
