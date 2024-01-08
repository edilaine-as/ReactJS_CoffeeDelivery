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
        margin-bottom: 1rem;
    }
`

export const BaseContainer = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
`

export const AddressContainer = styled(BaseContainer)`
    border-radius: 6px;
`

export const Heading = styled.div`
    display: flex;
    gap: 8px;

    div{
        span{
            ${mixins.fonts.textM}
        }
    
        p{
            ${mixins.fonts.textS}
        }
    }

`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${props => props.theme["yellow-dark"]};
  }
`

export const AddressForm = styled.div``

export const OrderContainer = styled.div`
    width: 28rem;

    > h2 {
        color: ${(props) => props.theme['base-subtitle']};
        ${mixins.fonts.titleXS}
    }
`

export const CartContainer = styled.div``

export const PaymentContainer = styled(BaseContainer)`
    margin-top: 0.75rem;
    border-radius: 6px;
`

export const PaymentHeading = styled(Heading)`
svg {
    color: ${props => props.theme["purple"]};
  }
`