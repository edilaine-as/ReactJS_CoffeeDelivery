import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import imgOrderSucess from '../../../public/img-order-sucess.svg'
import { Info, Order, Container, Heading, InfoContent } from './styles'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export function OrderSuccess() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))

  const paymentMethod = {
    cash: 'Dinheiro',
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito'
  }

  if(!orderInfo?.id){
    return null
  }

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
                  <strong> {orderInfo.street}, {orderInfo.number}</strong>
                </span>
                <span>{orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}</span>
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
                  <strong>
                    {paymentMethod[orderInfo.paymentMethod]}
                  </strong>
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
