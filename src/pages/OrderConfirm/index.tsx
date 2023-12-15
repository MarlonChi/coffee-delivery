import { MapPin } from "phosphor-react";

import Header from "../../components/Header";
import { Container } from "../../components/Container";
import Heading from "../../components/Heading";

import DeliveryImage from "../../assets/order-confirm.svg";

import * as S from "./styles";

const OrderConfirm = () => {
  return (
    <S.OrderConfirmContainer>
      <Header />
      <Container>
        <S.OrderConfirmContent>
          <S.OrderConfirmInfos>
            <Heading size="large">Uhu! Pedido confirmado</Heading>
            <p>Agora é só aguardar que logo o café chegará até você</p>
            <S.InfoBox>
              <S.ResumeItem>
                <S.Icon>
                  <MapPin size={16} weight="fill" />
                </S.Icon>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </S.ResumeItem>
              <S.ResumeItem>
                <S.Icon>
                  <MapPin size={16} weight="fill" />
                </S.Icon>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </S.ResumeItem>
              <S.ResumeItem>
                <S.Icon>
                  <MapPin size={16} weight="fill" />
                </S.Icon>
                Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto
                Alegre, RS
              </S.ResumeItem>
            </S.InfoBox>
          </S.OrderConfirmInfos>
          <img
            src={DeliveryImage}
            alt="Homem em uma moto indo a caminho da entrega"
          />
        </S.OrderConfirmContent>
      </Container>
    </S.OrderConfirmContainer>
  );
};

export default OrderConfirm;
