import styled, { css } from "styled-components";

export const BannerMainContainer = styled.div`
  ${() => css`
    background-image: url("../../assets/banner-main-shape.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: 9.2rem;
    padding-bottom: 9.2rem;
  `}
`;

export const BannerMainContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: ${theme.breakpoints.tabletLandscape}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }
  `}
`;

export const Informations = styled.div`
  ${({ theme }) => css`
    max-width: 58.8rem;
    h1 {
      font-size: ${theme.fonts.size.titleL};
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
      color: ${theme.colors.baseTitle};

      @media (min-width: ${theme.breakpoints.tabletPortrait}) {
        font-size: ${theme.fonts.size.titleXl};
      }
    }

    p {
      font-size: ${theme.fonts.size.textM};
      font-style: normal;
      font-weight: 400;
      line-height: 130%;
      color: ${theme.colors.baseSubtitle};
      margin-top: 1.6rem;

      @media (min-width: ${theme.breakpoints.tabletPortrait}) {
        font-size: ${theme.fonts.size.textL};
      }
    }
  `}
`;

export const Image = styled.div`
  ${({ theme }) => css`
    margin-top: 1.6rem;

    img {
      width: 100%;
      max-width: 476px;
    }

    @media (min-width: ${theme.breakpoints.tabletLandscape}) {
      margin-top: 0;
    }
  `}
`;

export const InformationItems = styled.div`
  ${({ theme }) => css`
    margin-top: 6.6rem;
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      grid-template-columns: 1fr 1fr;
    }
  `}
`;

export const InfoItem = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fonts.size.textS};
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    @media (min-width: ${theme.breakpoints.tabletPortrait}) {
      justify-content: flex-start;
      font-size: ${theme.fonts.size.textM};
    }

    span {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &:nth-child(1) {
      span {
        background: ${theme.colors.yellowDark};
      }
    }

    &:nth-child(2) {
      span {
        background: ${theme.colors.baseText};
      }
    }

    &:nth-child(3) {
      span {
        background: ${theme.colors.yellow};
      }
    }

    &:nth-child(4) {
      span {
        background: ${theme.colors.purple};
      }
    }
  `}
`;
