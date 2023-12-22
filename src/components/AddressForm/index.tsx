import { useDispatch, useSelector } from "react-redux";

import { MapPinLine } from "phosphor-react";

import Heading from "../Heading";
import Input from "../Input";
import { setAddressData } from "../../store/checkout/slice";

import * as S from "./styles";

const AddressForm = () => {
  const dispatch = useDispatch();
  const addressData = useSelector((state: any) => state.checkout);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(setAddressData({ [name]: value }));
  };

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
            placeholder="CEP"
            value={addressData.cep}
            onChange={handleChange}
            required
          />
          <Input
            name="address"
            type="text"
            placeholder="Rua"
            value={addressData.address}
            onChange={handleChange}
            fullWidth
            required
          />
          <S.InputRow>
            <Input
              name="number"
              type="text"
              placeholder="Número"
              value={addressData.number}
              onChange={handleChange}
              required
            />
            <Input
              name="complement"
              type="text"
              placeholder="Complemento"
              value={addressData.complement}
              onChange={handleChange}
              fullWidth
            />
          </S.InputRow>
          <S.InputRow>
            <Input
              name="district"
              type="text"
              placeholder="Bairro"
              value={addressData.district}
              onChange={handleChange}
              required
            />
            <Input
              name="city"
              type="text"
              placeholder="Cidade"
              value={addressData.city}
              onChange={handleChange}
              fullWidth
              required
            />
            <Input
              name="state"
              type="text"
              placeholder="UF"
              value={addressData.state}
              onChange={handleChange}
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
