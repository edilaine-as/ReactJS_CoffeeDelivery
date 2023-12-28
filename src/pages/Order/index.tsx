import { AdressContent, OrderContainer, CartContent, CartContainer, Container, PaymentContent } from "./styles";

export function Order(){
    return(
        <Container>
            <OrderContainer>
                <h2>Complete seu pedido</h2>

                <AdressContent></AdressContent>

                <PaymentContent></PaymentContent>
            </OrderContainer>
            <CartContainer>
                <h2>Cafés selecionados</h2>

                <CartContent></CartContent>
            </CartContainer>
        </Container>
    )
}