import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useTheme } from 'styled-components'
import { QuantityInput } from '../QuantityInput'
import {
  CoffeeImg,
  Container,
  Control,
  Description,
  Order,
  Price,
  Tags,
  Title,
} from './style'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const theme = useTheme()
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  function incrementQuantity(){
    setQuantity(state => state + 1)
  }

  function decrementQuantity(){
    if(quantity > 1){
      setQuantity(state => state - 1)
    }
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>

      <Title>{coffee.title}</Title>

      <Description>{coffee.description}</Description>

      <Control>
        <Price>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order>
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
          />
          <button>
            <ShoppingCart weight="fill" size={22} color={theme['base-card']}/>
          </button>
        </Order>
      </Control>
    </Container>
  )
}
