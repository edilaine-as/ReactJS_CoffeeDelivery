import { produce } from 'immer'
import { OrderInfo } from '../../pages/Order'
import { Actions, ActionTypes } from './actions'

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

interface CartState {
  cart: Item[]
  orders: Order[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )

        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantity += action.payload.item.quantity
        } else {
          draft.cart.push(action.payload.item)
        }
      })

    default:
      return state
  }
}
