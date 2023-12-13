import styled, { css } from "styled-components";

export const QuantityInputContainer = styled.div`
  ${({ theme }) => css`
    max-width: 7.2rem;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 4px;

    background: ${theme.colors.baseButton};
    padding: 0.8rem;
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
