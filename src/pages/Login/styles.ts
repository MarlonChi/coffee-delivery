import styled, { css } from "styled-components";

import { HeadingContainer } from "../../components/Heading/styles";
import { Input } from "../../components/Input/styles";

export const LoginContainer = styled.main``;

export const LoginContent = styled.section`
  ${({ theme }) => css`
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    gap: 1.6rem;
    text-align: center;

    ${HeadingContainer} {
      color: ${theme.colors.yellowDark};
    }

    ${Input} {
      width: 100%;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
    }

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      flex-direction: row;
    }
  `}
`;

export const LoginImage = styled.div`
  ${({ theme }) => css`
    display: none;

    img {
      width: 100%;
    }

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      display: block;
    }
  `}
`;

export const FormContent = styled.div`
  max-width: 38rem;
  width: 100%;
`;

export const SignInButton = styled.button`
  ${({ theme }) => css`
    padding: 12px 8px;
    border: none;
    background: ${theme.colors.purple};
    color: ${theme.colors.white};
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  `}
`;

export const AlreadyHaveAnAccount = styled.p`
  ${({ theme }) => css`
    margin-top: 1.8rem;
    color: ${theme.colors.baseSubtitle};

    a {
      color: ${theme.colors.purple};
      font-weight: 700;
      cursor: pointer;
    }
  `}
`;
