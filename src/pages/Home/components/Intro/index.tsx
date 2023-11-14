import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introCoffeeDelivery from '../../../../assets/intro-coffee-delivery.svg'
import {
  CoffeeContainer,
  IconsContainer,
  IntroContainer,
  IntroContent,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
} from './styles'

export function Intro() {
  return (
    <IntroContainer>
      <IntroContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <IconsContainer>
          <div>
            <div>
              <ShoppingCartContainer>
                <ShoppingCart size={20} weight="fill" />
              </ShoppingCartContainer>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <PackageContainer>
                <Package size={20} weight="fill" />
              </PackageContainer>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>

          <div>
            <div>
              <TimerContainer>
                <Timer size={20} weight="fill" />
              </TimerContainer>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <CoffeeContainer>
                <Coffee size={20} weight="fill" />
              </CoffeeContainer>
              <p>Entrega rápida e rastreada</p>
            </div>
          </div>
        </IconsContainer>
      </IntroContent>
      <img src={introCoffeeDelivery} alt="" />
    </IntroContainer>
  )
}
