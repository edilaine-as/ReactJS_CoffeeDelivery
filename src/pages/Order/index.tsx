import { MapPin } from "phosphor-react";
import { 
        Container, 
        InfoOrderContainer, 
        AdressContainer, AdressHeading, AdressForm,
        PaymentContainer,
        OrderContainer, 
        CartContainer, 
} from "./styles";

export function Order(){
    return(
        <Container>
            <InfoOrderContainer>
                <h2>Complete seu pedido</h2>

                <AdressContainer>
                    <AdressHeading>
                        <MapPin/>
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </AdressHeading>
                    <AdressForm>
                        
                    </AdressForm>
                </AdressContainer>

                <PaymentContainer></PaymentContainer>
            </InfoOrderContainer>
            <OrderContainer>
                <h2>Cafés selecionados</h2>

                <CartContainer></CartContainer>
            </OrderContainer>
        </Container>
    )
}