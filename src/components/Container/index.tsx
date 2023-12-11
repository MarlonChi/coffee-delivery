import styled, { css } from "styled-components";

export const Container = styled.div`
  ${() => css`
    width: 100%;
    max-width: 144rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  `}
`;
