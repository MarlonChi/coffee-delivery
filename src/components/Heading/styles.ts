import styled, { DefaultTheme, css } from "styled-components";

import { HeadingProps } from "./types";

const headingModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.titleS};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.titleM};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.fonts.size.titleL};
  `,
};

export const HeadingContainer = styled.h2<HeadingProps>`
  ${({ theme, size }) => css`
    ${!!size && headingModifiers[size](theme)}
  `}
`;
