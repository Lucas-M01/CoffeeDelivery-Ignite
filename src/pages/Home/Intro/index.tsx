import { HomeContainer, Intro, IntroTitle, ItensContainer } from "./styles";
import imagemCoffeeHome from "../../../assets/Imagem-CoffeeHome.svg"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { RegularText } from "../../../components/Typography";
import { InfoWithIcon } from "../../../components/InfoWithIcon";
import { useTheme } from "styled-components";
 
export function HomeIntro() {
    const { colors } = useTheme();
    return (
        <HomeContainer>
            <Intro>
                <div>
                    <IntroTitle size="xl">Encontre o café perfeito para qualquer hora do dia</IntroTitle>
                    <RegularText as="h3" size="l" color="subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</RegularText>
                </div>
                
                <ItensContainer>
                    <InfoWithIcon icon={<ShoppingCart weight="fill" />} iconBg={colors["yellow-dark"]} text="Compra simples e segura" />
                    
                    <InfoWithIcon icon={<Package weight="fill" />} iconBg={colors["base-title"]} text="Embalagem mantém o café intacto" />
                    
                    <InfoWithIcon icon={<Timer weight="fill" />} iconBg={colors.yellow} text="Entrega rápida e rastreada" />
                    
                    <InfoWithIcon icon={<Coffee weight="fill" />} iconBg={colors["purple"]} text="O café chega fresquinho até você" />
                </ItensContainer>
            </Intro>
            <img src={imagemCoffeeHome} />
        </HomeContainer>
    )
}