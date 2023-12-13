import { MapPinLine } from "phosphor-react";

import Heading from "../Heading";

import * as S from "./styles";
import Input from "../Input";

const AddressForm = () => {
  return (
    <S.AddressFormContainer>
      <Heading size="small">Complete seu pedido</Heading>
      <S.AddressForm>
        <S.CardHeader>
          <MapPinLine size={22} color="#C47F17" />
          <div>
            <h3>Endereço de Entrega</h3>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </S.CardHeader>
        <S.InputGroup>
          <Input
            name="cep"
            type="text"
            placeholder="Informe seu CEP"
            required
          />
          <Input
            name="address"
            type="text"
            placeholder="Nome da rua"
            fullWidth
            required
          />
          <S.InputRow>
            <Input name="number" type="text" placeholder="Número" required />
            <Input
              name="complement"
              type="text"
              placeholder="Número"
              fullWidth
            />
          </S.InputRow>
          <S.InputRow>
            <Input name="district" type="text" placeholder="Bairro" required />
            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              fullWidth
              required
            />
            <Input
              name="state"
              type="text"
              placeholder="Estado"
              small
              required
            />
          </S.InputRow>
        </S.InputGroup>
      </S.AddressForm>
    </S.AddressFormContainer>
  );
};

export default AddressForm;
