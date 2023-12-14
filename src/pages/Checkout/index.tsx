import AddressForm from "../../components/AddressForm";
import Header from "../../components/Header";
import { Container } from "../../components/Container";

import * as S from "./styles";
import CheckoutPayments from "../../components/CheckoutPayments";
import OrderResume from "../../components/OrderResume";

const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <Header />
      <Container>
        <S.CheckoutContent>
          <div>
            <AddressForm />
            <CheckoutPayments />
          </div>
          <div>
            <OrderResume />
          </div>
        </S.CheckoutContent>
      </Container>
    </S.CheckoutContainer>
  );
};

export default Checkout;
