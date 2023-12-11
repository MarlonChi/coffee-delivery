import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { Container } from "../Container";
import BannerImg from "../../assets/banner-img.svg";
import * as S from "./styles";

const BannerMain = () => {
  return (
    <S.BannerMainContainer>
      <Container>
        <S.BannerMainContent>
          <S.Informations>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <S.InformationItems>
              <S.InfoItem>
                <span>
                  <ShoppingCart size={16} weight="bold" />{" "}
                </span>
                Compra simples e segura
              </S.InfoItem>
              <S.InfoItem>
                <span>
                  <Package size={16} weight="duotone" />
                </span>
                Embalagem mantém o café intacto
              </S.InfoItem>
              <S.InfoItem>
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                Entrega rápida e rastreada
              </S.InfoItem>
              <S.InfoItem>
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
                O café chega fresquinho até você
              </S.InfoItem>
            </S.InformationItems>
          </S.Informations>
          <S.Image>
            <img
              src={BannerImg}
              alt="Imagem de um copo de café com fundo em amarelo"
            />
          </S.Image>
        </S.BannerMainContent>
      </Container>
    </S.BannerMainContainer>
  );
};

export default BannerMain;
