import styled, { css } from "styled-components";
import { InputProps } from "./types";

const inputModifiers = {
  fullWidth: () => css`
    width: 100%;
  `,

  small: () => css`
    width: 60px;
  `,
};

export const Input = styled.input<Pick<InputProps, "fullWidth" | "small">>`
  ${({ theme, fullWidth, small }) => css`
    border-radius: 4px;
    border: 1px solid ${theme.colors.baseButton};
    background: ${theme.colors.baseInput};
    padding: 1.2rem;

    font-family: "Roboto";
    font-size: ${theme.fonts.size.textS};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${theme.colors.baseText};

    width: 200px;

    &::placeholder {
      color: ${theme.colors.baseLabel};
    }

    ${fullWidth && inputModifiers.fullWidth()}
    ${small && inputModifiers.small()}
  `}
`;
