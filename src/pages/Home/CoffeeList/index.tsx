import { TitleText } from "../../../components/Typography";
import { CoffeeListContainer, CoffesList } from "./styles";

export function CoffeeList() {
    return(
        <CoffeeListContainer>
            <TitleText size="l" color="subtitle">
                Nossos cafés
            </TitleText>

            <CoffesList>
                
            </CoffesList>
        </CoffeeListContainer>
    )
}