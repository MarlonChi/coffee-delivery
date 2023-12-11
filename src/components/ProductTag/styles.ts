import styled, { css } from "styled-components";

export const ProductTag = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.tag};
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
    color: ${theme.colors.yellowDark};
    padding: 4px 8px;
    border-radius: 100px;
    background: ${theme.colors.yellowLight};
  `}
`;
