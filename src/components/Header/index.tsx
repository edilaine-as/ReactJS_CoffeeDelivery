import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />

      <nav>
        <a href="">
          <MapPin weight="fill" size={24} />
          <span>Porto Alegre, RS</span>
        </a>
        <a href="">
          <ShoppingCart weight="fill" size={24} />
        </a>
      </nav>
    </HeaderContainer>
  )
}
