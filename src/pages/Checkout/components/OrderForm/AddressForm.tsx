import { Input } from "../../../../components/Input/Input";
import { useFormContext } from 'react-hook-form'
import { AddressFormContainer } from "./styles";

interface ErrorType {
    errors: {
        [key: string]: {
            message: string;
        }
    }
}

export function AddressForm() {
    const { register, formState } = useFormContext();
    const { errors } = formState as unknown as ErrorType;
    return (
        <AddressFormContainer>
            <Input 
                placeholder="CEP" 
                className="cep"
                type="number"
                {...register("cep")}
                error={errors.cep?.message}
            />
            
            <Input 
                placeholder="Rua" 
                className="street"
                {...register("street")}
                error={errors.street?.message}
            />
            
            <Input 
                placeholder="Número"
                type="number" 
                {...register("number")}
                error={errors.number?.message}
            />
            
            <Input 
                placeholder="Complemento"
                className="complement"
                {...register("complement")}
                error={errors.complement?.message}
            />

            <Input 
                placeholder="Bairro"
                {...register("district")}
                error={errors.district?.message}
            />

            <Input 
                placeholder="Cidade" 
                {...register("city")}
                error={errors.city?.message}
            />

            <Input 
                placeholder="UF"
                {...register("uf")}
                error={errors.uf?.message}
            />
        </AddressFormContainer>
    )
}