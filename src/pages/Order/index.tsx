import { CurrencyDollar, MapPin } from "phosphor-react";
import { 
        Container, 
        InfoOrderContainer, 
        AddressContainer, AddressHeading, AddressForm,
        PaymentContainer,
        OrderContainer, 
        CartContainer,
        PaymentHeading, 
} from "./styles";
import { TextInput } from "../../components/TextInput";

export function Order(){
    return(
        <Container>
            <InfoOrderContainer>
                <h2>Complete seu pedido</h2>

                <AddressContainer>
                    <AddressHeading>
                        <MapPin size={22}/>
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </AddressHeading>
                    <AddressForm>
                    </AddressForm>
                </AddressContainer>

                <PaymentContainer>
                    <PaymentHeading>
                        <CurrencyDollar size={22}/>
                        <div>
                            <span>Pagamento</span>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </PaymentHeading>
                </PaymentContainer>
            </InfoOrderContainer>
            <OrderContainer>
                <h2>Cafés selecionados</h2>

                <CartContainer></CartContainer>
            </OrderContainer>
        </Container>
    )
}