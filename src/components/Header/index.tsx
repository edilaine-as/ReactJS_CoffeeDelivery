import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../../public/logo-coffee-delivery.svg'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer } from './styles'

export function Header() {
  const { cart } = useCart()

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
          {cart.length !== 0? <span>{cart.length}</span> : null}
        </a>
      </nav>
    </HeaderContainer>
  )
}
