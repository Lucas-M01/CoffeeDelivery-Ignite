import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { QuantityInput } from "../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../components/Typography";
import { useCart } from "../../../hook/useCart";

import { AddCart, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}

export function formatMoney(value: number) {
    return value.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
    })
}

export function CardCoffee({coffee}: CoffeeProps) {
    const [quantity, setQuantity] = useState(1)

    function handleIncrease() {
        setQuantity((state) => state + 1 )
    }

    function handleDecrease() {
        setQuantity((state) => state - 1)
    }
    
    const { addCoffeeToCart } = useCart()

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity
        }

        addCoffeeToCart(coffeeToAdd)
    }

    const formattedPrice = formatMoney(coffee.price)
    return (
        <CoffeeCardContainer>
            <img src={`/coffee/${coffee.photo}`} />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>
                {coffee.name}
            </Name>

            <Description>
                {coffee.description}
            </Description>

            <CardFooter>
                <div>
                    <RegularText size="s" >R$</RegularText>
                    <TitleText size="m" color="subtitle">{formattedPrice}</TitleText>
                </div>
                
                <AddCart>
                    <QuantityInput
                     onIncrease={handleIncrease}
                     onDecrease={handleDecrease}
                     quantity={quantity} 
                    />
                    <button onClick={handleAddToCart} title="Adicionar ao carrinho">
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCart>
            </CardFooter>
        </CoffeeCardContainer>
    )
}