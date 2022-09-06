import { CheckoutContainer } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer>
            <h4>Complete seu pedido</h4>
            <div>
                <form>
                    <h5>Endereço de Entrega</h5>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                    <input type="number" />
                    <input type="text" />
                    <input type="number" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </form>
                <div>
                    <h5>Pagamento</h5>
                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                    <section>
                        <button>
                            Cartão de crédito
                        </button>
                        
                        <button>
                            Cartão de Débito
                        </button>
                        
                        <button>
                            Dinheiro
                        </button>
                    </section>
                </div>
            </div>
                <h5>Cafés selecionados</h5>
            <div>
                <section>
                    <p>dfsfsdf</p>
                </section>
            </div>
        </CheckoutContainer>
    )
}