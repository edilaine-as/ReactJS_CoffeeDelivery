import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.main`
  max-width: 1160px;
  display: flex;
  gap: 32px;
  margin: 0 auto;
  padding: 2.5rem 1.25rem;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

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
  margin-bottom: 2rem;

  div {
    span {
      ${mixins.fonts.textM}
    }

    p {
      ${mixins.fonts.textS}
    }
  }
`

export const AddressHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
`

export const AddressForm = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const CartContainer = styled.div``

export const PaymentContainer = styled(BaseContainer)`
  margin-top: 0.75rem;
  border-radius: 6px;
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`
