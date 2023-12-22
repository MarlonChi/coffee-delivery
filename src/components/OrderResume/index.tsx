import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Heading from "../Heading";
import OrderItem from "../OrderItem";

import * as S from "./styles";

const OrderResume = () => {
  const cartItems = useSelector((state: any) => state.cart.items);

  const cartProductsPrice = () => {
    return cartItems.reduce((total: any, product: any) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  const cartTotalPrice = cartProductsPrice() + 8;

  return (
    <S.OrderResumeContainer>
      <Heading size="small">Cafés selecionados</Heading>
      <S.OrderResume>
        {cartItems?.map((item: any) => (
          <div key={item.id}>
            <OrderItem product={item} />
            <S.Divider />
          </div>
        ))}
        <S.OrderRow>
          Total de itens
          <span>
            {cartProductsPrice().toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </S.OrderRow>
        <S.OrderRow>
          Entrega <span>R$ 8,00</span>
        </S.OrderRow>
        <S.OrderRow>
          <strong>Total</strong>
          <strong>
            <span>
              {cartTotalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </strong>
        </S.OrderRow>
        <NavLink to="/order-confirmed">
          <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
        </NavLink>
      </S.OrderResume>
    </S.OrderResumeContainer>
  );
};

export default OrderResume;
