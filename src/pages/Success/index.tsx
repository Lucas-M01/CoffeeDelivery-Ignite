import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import { useEffect } from "react";
import illustration from "../../assets/confirmedOrder.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { RegularText, TitleText } from "../../components/Typography";
import { OrderData } from "../Checkout";
import { paymentMethods } from "../Checkout/components/CompleteOrderForm/PaymentMethodOptions";
import { OrderInfo, SuccessContainer } from "./styles";

interface LocationType {
    state: OrderData;
}

export function Success() {
    const { colors } = useTheme();

    const { state } = useLocation() as unknown as LocationType;

    const navigate = useNavigate();

    useEffect(() => {
        if (!state) {
            navigate("/");
        }
    }, []);

    if (!state) return <></>;
    
    return (
        <SuccessContainer>
            <div>
                <TitleText size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText size="l">Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
                <OrderInfo>
                    <InfoWithIcon 
                        icon={<MapPin weight="fill" />}
                        iconBg={colors.purple}
                        text={
                            <RegularText>
                                Entrega em <strong>{state.street}</strong>, {state.number}
                                <br />
                                {state.district} - {state.city}, {state.uf}
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Clock weight="fill" />}
                        iconBg={colors["yellow"]}
                        text={
                        <RegularText>
                            Previsão de entrega
                            <br />
                            <strong>20 min - 30 min</strong>
                        </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight="fill" />}
                        iconBg={colors["yellow-dark"]}
                        text={
                        <RegularText>
                            Pagamento na entrega
                            <br />
                            <strong>{paymentMethods[state.paymentMethod].label}</strong>
                        </RegularText>
                        }
                    />

                </OrderInfo>
                
                <img src={illustration} />
            </section>
        </SuccessContainer>
    )
}