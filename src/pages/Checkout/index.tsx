import AddressForm from "../../components/AddressForm";
import Header from "../../components/Header";
import { Container } from "../../components/Container";

import * as S from "./styles";

const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <Header />
      <Container>
        <S.CheckoutContent>
          <div>
            <AddressForm />
          </div>
          <div>
            <h1>Resume</h1>
          </div>
        </S.CheckoutContent>
      </Container>
    </S.CheckoutContainer>
  );
};

export default Checkout;
