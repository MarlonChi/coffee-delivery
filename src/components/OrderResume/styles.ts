import styled, { css } from "styled-components";

export const OrderResumeContainer = styled.div`
  ${() => css``}
`;

export const OrderResume = styled.div`
  ${({ theme }) => css`
    border-radius: 6px 44px;
    padding: 4rem;
    background: ${theme.colors.baseCard};
  `}
`;

export const Divider = styled.div`
  ${({ theme }) => css`
    border-top: 1px solid ${theme.colors.baseButton};
    margin: 2.4rem 0;
  `}
`;

export const OrderRow = styled.div`
  ${({ theme }) => css`
    margin-top: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-family: "Roboto";
    font-size: ${theme.fonts.size.textS};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    color: ${theme.colors.baseText};

    span {
      font-size: ${theme.fonts.size.textM};
    }

    strong {
      font-size: ${theme.fonts.size.textL};
      font-weight: 700;
    }
  `}
`;

export const ConfirmButton = styled.button`
  ${({ theme }) => css`
    margin-top: 2.4rem;
    border-radius: 6px;
    border: none;
    background: ${theme.colors.yellow};
    padding: 12px 8px;

    font-family: "Roboto";
    font-size: ${theme.fonts.size.textS};
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    color: ${theme.colors.white};

    width: 100%;
    cursor: pointer;

    &:hover {
      background: ${theme.colors.yellowDark};
    }

    &:disabled {
      cursor: not-allowed;
    }
  `}
`;
