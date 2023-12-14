import { useState } from "react";

import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import * as S from "./styles";

const CheckoutPayments = () => {
  const [payment, setPayment] = useState("");

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
        onValueChange={(value) => setPayment(value)}
        value={payment}
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
