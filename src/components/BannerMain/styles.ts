import styled, { css } from "styled-components";

export const BannerMainContainer = styled.div`
  ${() => css`
    background-image: url("../../assets/banner-main-shape.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}
`;

export const BannerMainContent = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  `}
`;

export const Informations = styled.div`
  ${() => css``}
`;

export const Image = styled.div`
  ${() => css``}
`;

export const InformationItems = styled.div`
  ${() => css``}
`;

export const InfoItem = styled.div`
  ${() => css``}
`;
