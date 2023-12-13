import styled, { css } from "styled-components";

export const AddressFormContainer = styled.div`
  ${() => css``}
`;

export const AddressForm = styled.form`
  ${({ theme }) => css`
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

export const InputGroup = styled.div`
  margin-top: 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1.2rem;
`;
