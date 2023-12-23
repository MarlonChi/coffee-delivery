import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Heading from "../Heading";
import OrderItem from "../OrderItem";

import * as S from "./styles";

const OrderResume = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const addressData = useSelector((state: any) => state.checkout);

  const notify = () =>
    toast.warn("Por favor, preencha todos os dados para prosseguir.");

  const cartProductsPrice = () => {
    return cartItems.reduce((total: any, product: any) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  const cartTotalPrice = cartProductsPrice() + 8;

  const isAddressDataValid = () => {
    return !Object.values(addressData).some((value) => value === "");
  };

  return (
    <S.OrderResumeContainer>
      <ToastContainer />
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
        {!isAddressDataValid() ? (
          <S.ConfirmButton onClick={notify}>Confirmar Pedido</S.ConfirmButton>
        ) : (
          <NavLink to="/order-confirmed">
            <S.ConfirmButton>Confirmar Pedido</S.ConfirmButton>
          </NavLink>
        )}
      </S.OrderResume>
    </S.OrderResumeContainer>
  );
};

export default OrderResume;
