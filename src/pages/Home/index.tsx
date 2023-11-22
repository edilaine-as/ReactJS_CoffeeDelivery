import { Header } from '../../components/Header'
import { Card } from '../../components/Cart'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introCoffeeDelivery from '../../../public/images/intro-coffee-delivery.svg'
import {
  CoffeeContainer,
  CoffeeList,
  IconsContainer,
  IntroContainer,
  IntroContent,
  PackageContainer,
  ShoppingCartContainer,
  TimerContainer,
} from './styles'

import { coffees } from '../../../data.json'

export function Home() {
  return (
    <>
      <Header />
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
      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </>
  )
}
