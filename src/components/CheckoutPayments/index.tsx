import { useDispatch, useSelector } from "react-redux";
import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

import { setAddressData } from "../../store/checkout/slice";
import { RootState } from "../../store/configureStore";

import * as S from "./styles";

const CheckoutPayments = () => {
  const dispatch = useDispatch();
  const addressData = useSelector((state: RootState) => state.checkout);

  const handleInputChange = (name: string, value: string) => {
    dispatch(setAddressData({ [name]: value }));
  };

  return (
    <S.CheckoutPaymentsContainer>
      <S.CardHeader>
        <CurrencyDollar size={22} color="#8047F8" />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </S.CardHeader>
      <S.PaymentType
        onValueChange={(value) => handleInputChange("paymentMethod", value)}
        value={addressData.paymentMethod}
      >
        <S.PaymentTypeButton value="credit">
          <CreditCard size={16} />
          Cartão de Crédito
        </S.PaymentTypeButton>
        <S.PaymentTypeButton value="debit">
          <Bank size={16} />
          Cartão de Débito
        </S.PaymentTypeButton>
        <S.PaymentTypeButton value="money">
          <Money size={16} />
          Dinheiro
        </S.PaymentTypeButton>
      </S.PaymentType>
    </S.CheckoutPaymentsContainer>
  );
};

export default CheckoutPayments;
