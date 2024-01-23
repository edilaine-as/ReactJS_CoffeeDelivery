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
import { useCart } from '../../hooks/useCart'
import { coffees } from '../../../data.json'
import { QuantityInput } from '../../components/QuantityInput'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler } from 'react-hook-form/dist/types'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

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

export function Order() {
  const { cart, incrementCoffeeQuantity, decrementCoffeeQuantity, removeItem, checkoutCart } = useCart()
  
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

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')
  
  function handleIncrementQuantity(itemId: string){
    incrementCoffeeQuantity(itemId);
  }

  function handleDecrementQuantity(itemId: string){
    decrementCoffeeQuantity(itemId);
  }

  function handleItemRemove(itemId: string){
    removeItem(itemId);
  }

  const handleOrderCartCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    }

    checkoutCart(data)
  }

  return (

    <Container>
      <InfoContainer>
        <h2>Complete seu pedido</h2>

        <form id="order" onSubmit={handleSubmit(handleOrderCartCheckout)}>
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
                error={errors.cep}
                {...register('cep', { valueAsNumber: true })}
              />
              <TextInput
                placeholder="Rua"
                containerProps={{ style: { gridArea: 'street' } }}
                error={errors.street}
                {...register('street')}
              />
              <TextInput
                placeholder="Número"
                containerProps={{ style: { gridArea: 'number' } }}
                error={errors.number}
                {...register('number')}
              />
              <TextInput
                placeholder="Complemento"
                containerProps={{ style: { gridArea: 'fullAddress' } }}
                error={errors.fullAddress}
                {...register('fullAddress')}
              />
              <TextInput
                placeholder="Bairro"
                containerProps={{ style: { gridArea: 'neighborhood' } }}
                error={errors.neighborhood}
                {...register('neighborhood')}
              />
              <TextInput
                placeholder="Cidade"
                containerProps={{ style: { gridArea: 'city' } }}
                error={errors.city}
                {...register('city')}
              />
              <TextInput
                placeholder="UF"
                containerProps={{ style: { gridArea: 'state' } }}
                error={errors.state}
                {...register('state')}
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
                <RadioButton 
                  isSelected={selectedPaymentMethod === 'credit'} 
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </RadioButton>
                <RadioButton 
                  isSelected={selectedPaymentMethod === 'debit'} 
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </RadioButton>
                <RadioButton 
                  isSelected={selectedPaymentMethod === 'cash'} 
                  {...register('paymentMethod')}
                  value="cash"
                >
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

                                <RemoveButton type="button" onClick={() => handleItemRemove(itemCart.id)}>
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

          <ConfirmOrderButton type='submit' form='order'>
            Confirmar pedido
          </ConfirmOrderButton>
        </CartContainer>
      </InfoContainer>
    </Container>
  )
}
