import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText } from "../../../../components/Typography";
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
import { Trash } from "phosphor-react";
import { CartItem } from "../../../../context/CartContext";
import { useCart } from "../../../../hook/useCart";
import { formatMoney } from "../../../Home/CardCoffee";

interface CoffeeCartCardProps {
  coffee: CartItem
}

export function CoffeeCartCard({ coffee }: CoffeeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart()

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemove() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatMoney(coffeeTotal);

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/coffee/${coffee.photo}`} />
        <div>
          <RegularText color="subtitle">{coffee.name}</RegularText>
          <ActionsContainer>
            <QuantityInput
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
              size="small"
            />
            <RemoveButton type="button" onClick={handleRemove}>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}