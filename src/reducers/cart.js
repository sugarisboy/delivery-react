import { ADD_ITEM, REMOVE_ITEM, REMOVE_SHOP, SET_ITEMS } from '../actions/actions-types'

const initialState = {
}

function fillCartEntries(cart, shopId, id) {
  if (!cart.hasOwnProperty(shopId)) {
    cart[shopId] = {}
  }
  if (!cart[shopId].hasOwnProperty('totalCount')) {
    cart[shopId].totalCount = 0
  }
  if (!cart[shopId].hasOwnProperty(id)) {
    cart[shopId][id] = {}
  }
  if (!cart[shopId][id].hasOwnProperty('count')) {
    cart[shopId][id].count = 0
  }
}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_ITEM: {
      const {shopId, id, count} = payload
      const cart = state

      fillCartEntries(cart, shopId, id)

      cart[shopId][id].count += count
      cart[shopId].totalCount += count

      return {
        ...cart
      }
    }
    case REMOVE_ITEM: {
      const {shopId, id, count} = payload
      const cart = state

      fillCartEntries(cart, shopId, id)

      const newCount = Math.max(cart[shopId][id].count - count, 0)
      if (newCount > 0) {
        cart[shopId][id].count = newCount
        cart[shopId].totalCount = newCount
      } else {
        cart[shopId][id] = undefined
      }

      return {
        ...cart,
      }
    }
    case REMOVE_SHOP: {
      const cart = state
      const shopId = payload

      if (cart.hasOwnProperty(shopId)) {
        cart[shopId] = undefined
      }

      return {
        ...cart,
      }
    }
    case SET_ITEMS: {
      return {
        ...action.payload,
      }
    }
    default:
      return {...state}
  }
}