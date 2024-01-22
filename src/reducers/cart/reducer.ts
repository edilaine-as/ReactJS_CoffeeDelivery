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

    case ActionTypes.REMOVE_ITEM:
      return produce(state, (draft) => {
        const itemToRemove = draft.cart.findIndex(
          (item) => item.id === action.payload.itemId
        )

          draft.cart.splice(itemToRemove, 1)
      })

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToIncrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        )

        if(itemToIncrement?.id) {
          itemToIncrement.quantity += 1;
        }
      })

      case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return produce(state, (draft) => {
        const itemToDecrement = draft.cart.find(
          (item) => item.id === action.payload.itemId
        )

        if(itemToDecrement?.id) {
          itemToDecrement.quantity -= 1;
        }
      })

    default:
      return state
  }
}
