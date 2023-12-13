import { useState } from "react";
import { Minus, Plus } from "phosphor-react";

import * as S from "./styles";

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <S.QuantityInputContainer>
      <S.Decrease onClick={decrement}>
        <Minus size={14} weight="bold" />
      </S.Decrease>
      <S.Quantity type="text" value={quantity} />
      <S.Increase onClick={increment}>
        <Plus size={14} weight="bold" />
      </S.Increase>
    </S.QuantityInputContainer>
  );
};

export default QuantityInput;
