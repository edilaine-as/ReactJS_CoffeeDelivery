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
} from './styles'
import { TextInput } from '../../components/TextInput'
import { RadioButton } from '../../components/RadioButton'

export function Order() {
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
          </PaymentContainer>
        </form>
      </InfoContainer>

      <InfoContainer>
        <h2>Cafés selecionados</h2>

        <CartContainer></CartContainer>
      </InfoContainer>
    </Container>
  )
}
