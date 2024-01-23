import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import logoCoffeeDelivery from '../../../public/logo-coffee-delivery.svg'
import { useCart } from '../../hooks/useCart'
import { HeaderContainer } from './styles'

export function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoCoffeeDelivery} alt="" />
      </Link>

      <nav>
        <a>
          <MapPin weight="fill" size={24} />
          <span>São Paulo, SP</span>
        </a>
        <Link to={`order`}>
          <ShoppingCart weight="fill" size={24} />
          {cart.length !== 0? <span>{cart.length}</span> : null}
        </Link>
      </nav>
    </HeaderContainer>
  )
}
