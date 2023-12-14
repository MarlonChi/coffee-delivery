import styled, { css } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutPaymentsContainer = styled.div`
  ${({ theme }) => css`
    margin-top: 1.2rem;
    padding: 4rem;
    border-radius: 0.6rem;
    background: ${theme.colors.baseCard};
  `}
`;

export const CardHeader = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;

    h3 {
      font-family: "Roboto";
      font-size: ${theme.fonts.size.textM};
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${theme.colors.baseSubtitle};
    }

    p {
      font-size: ${theme.fonts.size.textS};
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${theme.colors.baseText};
    }
  `}
`;

export const PaymentType = styled(RadioGroup.Root)`
  margin-top: 3.2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;
`;

export const PaymentTypeButton = styled(RadioGroup.Item)`
  ${({ theme }) => css`
    padding: 1.6rem;

    display: flex;
    align-items: center;
    gap: 1.2rem;

    border: none;
    border-radius: 6px;
    background: ${theme.colors.baseButton};

    font-family: "Roboto";
    font-size: ${theme.fonts.size.textXs};
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
    color: ${theme.colors.baseText};

    cursor: pointer;

    &:hover {
      outline: 1px solid ${theme.colors.purple};
    }

    &[data-state="checked"] {
      border: 1px solid ${theme.colors.purple};
    }

    svg {
      color: ${theme.colors.purple};
    }
  `}
`;
