import { CompleteOrderContainer } from "./styles";
import * as zod from "zod"
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hook/useCart";
import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money"
}

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Informe o CEP").max(8),
    street: zod.string().min(5, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(3, "Informe a Cidade"),
    uf: zod.string().min(2, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        },
    })
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
            paymentMethod: undefined,
        },
    });

    const { handleSubmit } = confirmOrderForm;

    const navigate = useNavigate();
    const { cleanCart } = useCart();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/orderConfirmed", {
        state: data,
        });
        cleanCart();
    }
    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>
    )
}