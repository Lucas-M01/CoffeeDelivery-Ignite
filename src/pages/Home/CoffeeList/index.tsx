import { TitleText } from "../../../components/Typography";
import { coffees } from "../../../data/coffees";
import { CardCoffee } from "../CardCoffee";
import { CoffeeListContainer, CoffesList } from "./styles";

export function CoffeeList() {
    return(
        <CoffeeListContainer>
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffesList>
                {coffees.map((coffee) => (
                    <CardCoffee key={coffee.id} coffee={coffee} />
                ))}
            </CoffesList>
        </CoffeeListContainer>
    )
}