import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgOrderSucess from '../../../public/img-order-sucess.svg'
import { Info, Order, Container, Heading, InfoContent } from './styles'
import { useTheme } from 'styled-components'

export function OrderSuccess() {
  const theme = useTheme()

  return (
    <Container>
      <Order>
        <Heading>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </Heading>
        <Info>
          <InfoContent>
            <div>
              <MapPin
                color={theme.white}
                style={{ backgroundColor: theme.purple }}
                size={32}
              />
              <div>
                <span>
                  Entrega em
                  <strong> Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </div>
            </div>

            <div>
              <Timer
                color={theme.white}
                style={{ backgroundColor: theme.yellow }}
                size={32}
              />
              <div>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </div>
            </div>

            <div>
              <CurrencyDollar
                color={theme.white}
                style={{ backgroundColor: theme['yellow-dark'] }}
                size={32}
              />
              <div>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de crédito</strong>
                </span>
              </div>
            </div>
          </InfoContent>
        </Info>
      </Order>
      <img src={imgOrderSucess} />
    </Container>
  )
}
