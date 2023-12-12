import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "phosphor-react";

import { decrement, increment } from "../../store/inputQuantity/slice";
import { RootState } from "../../store/configureStore";

import * as S from "./styles";

const QuantityInput = () => {
  const dispatch = useDispatch();
  const quantity = useSelector((state: RootState) => state.inputQuantity.value);

  return (
    <S.QuantityInputContainer>
      <S.Decrease onClick={() => dispatch(decrement())}>
        <Minus size={14} weight="bold" />
      </S.Decrease>
      <S.Quantity type="text" value={quantity} />
      <S.Increase onClick={() => dispatch(increment())}>
        <Plus size={14} weight="bold" />
      </S.Increase>
    </S.QuantityInputContainer>
  );
};

export default QuantityInput;
