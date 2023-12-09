import styled, { css } from "styled-components";

export const HeaderContainer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    box-shadow: ${theme.shadow.header};
  `}
`;

export const HeaderContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const HeaderActions = styled.div`
  ${() => css`
    display: flex;
    gap: 1.2rem;
  `}
`;

const HeaderButtons = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 8px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

export const Locale = styled(HeaderButtons)`
  ${({ theme }) => css`
    background: ${theme.colors.purpleLight};
    color: ${theme.colors.purpleDark};
    font-family: ${theme.fonts.family.primary};
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;

    &:hover {
      background: ${theme.colors.purpleDark};
      color: ${theme.colors.purpleLight};
    }
  `}
`;

export const Cart = styled(HeaderButtons)`
  ${({ theme }) => css`
    background: ${theme.colors.yellowLight};
    color: ${theme.colors.yellowDark};

    &:hover {
      background: ${theme.colors.yellowDark};
      color: ${theme.colors.yellowLight};
    }
  `}
`;
