import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.main`
    max-width: 1160px;
    display: flex;
    gap: 32px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
`
export const OrderContainer = styled.div`
    width: 40rem;

    > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        ${mixins.fonts.titleXS}
    }
`

export const AdressContent = styled.div``

export const CartContainer = styled.div`
    width: 28rem;

    > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        ${mixins.fonts.titleXS}
    }
`

export const CartContent = styled.div``

export const PaymentContent = styled.div``