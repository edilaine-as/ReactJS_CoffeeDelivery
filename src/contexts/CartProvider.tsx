import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { OrderInfo } from '../pages/Order'
import { addItemAction, checkoutCartAction, decrementCoffeeQuantityAction, incrementCoffeeQuantityAction, removeItemAction } from '../reducers/cart/actions'
import { cartReducer, Item, Order } from '../reducers/cart/reducer'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItem: (item: Item) => void
  removeItem: (id: Item['id']) => void
  incrementCoffeeQuantity: (id: Item['id']) => void
  decrementCoffeeQuantity: (id: Item['id']) => void
  checkoutCart: (order: OrderInfo) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },

    //arrow function q recebe cartState como param
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )

  const navigate = useNavigate()
  
  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: Item['id']){
    dispatch(removeItemAction(itemId))
  }

  function incrementCoffeeQuantity(itemId: Item['id']){
    dispatch(incrementCoffeeQuantityAction(itemId))
  }

  function decrementCoffeeQuantity(itemId: Item['id']){
    dispatch(decrementCoffeeQuantityAction(itemId))
  }

  function checkoutCart(order: OrderInfo){
    dispatch(checkoutCartAction(order, navigate))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        cart,
        orders,
        incrementCoffeeQuantity,
        decrementCoffeeQuantity,
        checkoutCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
