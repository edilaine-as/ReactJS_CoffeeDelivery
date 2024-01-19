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
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
  padding: 2.5rem;
  min-width: 640px;
  background-color: ${(props) => props.theme['base-card']};
`

export const AddressContainer = styled(BaseContainer)`
  border-radius: 6px;
`

export const Heading = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${(props) => props.theme['base-subtitle']};
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

export const PaymentContainer = styled(BaseContainer)`
  margin-top: 0.75rem;
  border-radius: 6px;
`

export const PaymentHeading = styled(Heading)`
  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const CartContainer = styled.div`
  padding: 2.5rem;
  width: 100%;
  min-width: 448px;

  border-radius: 6px 36px;
  background-color: ${(props) => props.theme['base-card']};
`

export const ItemCardContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 24px 0;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  > div{
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: flex-start;

    > img {
      width: 64px;
      height: 64px;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const ItemCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span{
    ${mixins.fonts.textM}
  }

  div{
    display: flex;
    gap: 8px;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 7px;

  border: none;
  border-radius: 6px;
  padding: 6.5px 8px;
  background-color: ${(props) => props.theme['base-button']};

  svg{
    color: ${props => props.theme.purple}
  }

  span{
    text-transform: uppercase;
    ${mixins.fonts.buttonM}
  }
  
`