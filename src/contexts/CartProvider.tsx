import { createContext, ReactNode, useEffect, useReducer } from "react";
import { addItemAction } from "../reducers/cart/actions";
import { cartReducer, Item, Order } from "../reducers/cart/reducer";

interface CartContextType {
    cart: Item[]
    orders: Order[]
    addItem: (item: Item) => void
  }

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps){
    const [cartState, dispatch] = useReducer(
        cartReducer,
        {
            cart: [],
            orders: [],
        },
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

      const { cart, orders } = cartState
      
    function addItem(item: Item) {
        dispatch(addItemAction(item))
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
                cart,
                orders}}>
            {children}
        </CartContext.Provider>
    )
}