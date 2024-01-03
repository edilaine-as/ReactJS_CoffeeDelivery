import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const Container = styled.main`
    max-width: 1160px;
    display: flex;
    gap: 32px;
    margin: 0 auto;
    padding: 2.5rem 1.25rem;
`
export const InfoOrderContainer = styled.div`
    width: 40rem;

    > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        ${mixins.fonts.titleXS}
    }
`

export const AdressContainer = styled.div``

export const AdressHeading = styled.div``

export const AdressForm = styled.div``

export const OrderContainer = styled.div`
    width: 28rem;

    > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        ${mixins.fonts.titleXS}
    }
`

export const CartContainer = styled.div``

export const PaymentContainer = styled.div``