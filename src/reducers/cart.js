import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS } from '../actions-types'

const initialState = {
  shops: {}
}

function fillCartEntries(shops, shopId, id) {
  if (!shops.hasOwnProperty(shopId)) {
    shops[shopId] = {}
  }
  if (!shops[shopId].hasOwnProperty(id)) {
    shops[shopId][id] = {}
  }
  if (!shops[shopId][id].hasOwnProperty('count')) {
    shops[shopId][id].count = 0
  }
}

export default (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case ADD_ITEM: {
      const {shopId, id, count} = payload
      const {shops} = state
      console.log(shopId)

      fillCartEntries(shops, shopId, id)

      shops[shopId][id].count += count
      return {
        ...state,
        shops: shops
      }
    }
    case REMOVE_ITEM: {
      const {shopId, id, count} = payload
      const {shops} = state
      console.log(shopId)

      fillCartEntries(shops, shopId, id)

      shops[shopId][id].count = Math.max(shops[shopId][id].count - count, 0)
      return {
        ...state,
        shops: shops
      }
    }
    case SET_ITEMS: {
      return {
        ...state,
        items: action.payload
      }
    }
    default:
      return {...state}
  }
}