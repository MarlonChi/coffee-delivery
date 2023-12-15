import styled, { css } from "styled-components";
import { HeadingContainer } from "../../components/Heading/styles";

export const OrderConfirmContainer = styled.section`
  ${() => css``}
`;

export const OrderConfirmContent = styled.div`
  ${() => css`
    margin-top: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const OrderConfirmInfos = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer} {
      color: ${theme.colors.yellowDark};
    }

    p {
      font-family: "Roboto";
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${theme.colors.baseSubtitle};
    }
  `}
`;

export const InfoBox = styled.div`
  ${({ theme }) => css`
    padding: 4rem;
    margin-top: 4rem;
    border-radius: 6px 36px;
    border: 1px solid ${theme.colors.purple};

    max-width: 526px;
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  `}
`;

export const ResumeItem = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.2rem;
  `}
`;

export const Icon = styled.div`
  ${({ theme }) => css`
    border-radius: 1000px;
    background: #8047f8;
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: white;
    }
  `}
`;
