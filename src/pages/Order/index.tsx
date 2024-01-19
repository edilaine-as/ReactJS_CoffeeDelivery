import { Bank, CreditCard, CurrencyDollar, MapPin } from 'phosphor-react'
import {
  Container,
  InfoContainer,
  AddressContainer,
  AddressHeading,
  AddressForm,
  PaymentContainer,
  CartContainer,
  PaymentHeading,
  PaymentOptions,
} from './styles'
import { TextInput } from '../../components/TextInput'
import { RadioButton } from '../../components/RadioButton'
import { z } from 'zod'

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a rua'),
  number: z.string().min(1, 'Informe o número'),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  state: z.string().min(1, 'Informe a UF'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type OrderInfo = z.infer<typeof newOrder>

import { useCart } from '../../hooks/useCart'
import { coffees } from '../../../data.json'
import { QuantityInput } from '../../components/QuantityInput'

export function Order() {
  const { cart, incrementCoffeeQuantity, decrementCoffeeQuantity } = useCart()

  function handleIncrementQuantity(itemId: string){
    incrementCoffeeQuantity(itemId);
  }

  function handleDecrementQuantity(itemId: string){
    decrementCoffeeQuantity(itemId);
  }

  return (
    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order">
          <AddressContainer>
            <AddressHeading>
              <MapPin size={22} />
              <div>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </AddressHeading>
            <AddressForm>
              <TextInput
                placeholder="CEP"
                type="number"
                containerProps={{ style: { gridArea: 'cep' } }}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
              />
              <TextInput
                placeholder="Complemento"
                containerProps={{ style: { gridArea: 'fullAddress' } }}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
              />
            </AddressForm>
          </AddressContainer>

          <PaymentContainer>
            <PaymentHeading>
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </PaymentHeading>
            <PaymentOptions>
              <div>
                <RadioButton value="credit">
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </RadioButton>
                <RadioButton value="debit">
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </RadioButton>
                <RadioButton value="cash">
                  <Bank size={16} />
                  <span>Dinheiro</span>
                </RadioButton>
              </div>
            </PaymentOptions>
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartContainer>
          <div>
            {coffees.map((coffee) => {
              return(
                <div key={coffee.id}>
                  {cart.map((itemCart) => {
                    if (itemCart.id === coffee.id) {
                      return (
                        <div>
                          <img src={coffee.image} alt={coffee.title} />
                          <div>
                            <span>{coffee.title}</span>
                            <div>
                              <QuantityInput 
                                quantity={itemCart.quantity}
                                incrementQuantity={() => handleIncrementQuantity(itemCart.id)}
                                decrementQuantity={() => handleDecrementQuantity(itemCart.id)}
                              />
                            </div>
                          </div>
                          <aside>{coffee.price}</aside>
                        </div>
                      )
                    }
                  })}
                </div>
              )
            })}
          </div>
        </CartContainer>
      </InfoContainer>
    </Container>
  )
}
