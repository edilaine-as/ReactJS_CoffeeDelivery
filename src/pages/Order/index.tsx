import { Bank, CreditCard, CurrencyDollar, MapPin, Trash } from 'phosphor-react'
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
  ItemCardContainer,
  ItemCardInfo,
  RemoveButton,
  InfoOrderContainer,
  ConfirmOrderButton,
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
  
  const coffeesInCart = cart.map((itemCart) => {
    const matchingItem = coffees.find((coffee) => coffee.id === itemCart.id);
    
    if(matchingItem){
      return {
        ...matchingItem,
        quantity: itemCart.quantity,
      }
    }else{
      throw new Error('Invalid coffee.')
    }
  })

  let totalItemsCart = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0);

  const shippingPrice = 2.99                         
  const totalWithShippingPrice = totalItemsCart + shippingPrice;
  
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
                        <ItemCardContainer>
                          <div>
                            <img src={coffee.image} alt={coffee.title} />
                            <ItemCardInfo>
                              <span>{coffee.title}</span>
                              <div>
                                <QuantityInput 
                                  quantity={itemCart.quantity}
                                  incrementQuantity={() => handleIncrementQuantity(itemCart.id)}
                                  decrementQuantity={() => handleDecrementQuantity(itemCart.id)}
                                />

                                <RemoveButton type="button">
                                  <Trash/>
                                  <span>Remover</span>
                                </RemoveButton>
                              </div>
                            </ItemCardInfo>
                          </div>
                          <aside>R$ {coffee.price.toFixed(2).toString().replace('.', ',')}</aside>
                        </ItemCardContainer>
                      )
                    }
                  })}
                </div>
              )
            })}
          </div>
          <InfoOrderContainer>
            <div>
              <span>Total de itens</span>
              <span>R$ {totalItemsCart.toFixed(2).toString().replace('.', ',')}
            </span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ {shippingPrice.toFixed(2).toString().replace('.', ',')}</span>
            </div>
            <div>
              <span>Total</span>
              <span>R$ {totalWithShippingPrice.toFixed(2).toString().replace('.', ',')}</span>
            </div>
          </InfoOrderContainer>

          <ConfirmOrderButton>
            Confirmar pedido
          </ConfirmOrderButton>
        </CartContainer>
      </InfoContainer>
    </Container>
  )
}
