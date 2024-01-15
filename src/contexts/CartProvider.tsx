import { createContext, ReactNode } from "react";
import { Item } from "../reducers/cart/reducer";

interface CartContextType {
    addItem: (item: Item) => void
  }

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps{
    children: ReactNode
}

export function CartContextProvider({children}: CartContextProviderProps){
      
    function addItem(item: Item) {
    }
      
    return (
        <CartContext.Provider
            value={{addItem}}>
            {children}
        </CartContext.Provider>
    )
}