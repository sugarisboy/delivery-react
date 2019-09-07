import { ADD_ITEM, DEC_CART, INC_CART, REMOVE_ITEM } from '../actions'

const initialState = {
  items: {},
  totalCount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const item = state.items[action.payload.id]
      const newCount = state.items[action.payload.id]
      && state.items[action.payload.id].hasOwnProperty('count')
          ? item.count + 1
          : 1

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            count: newCount
          }
        }
      }
    }
    case REMOVE_ITEM: {
      const item = state.items[action.payload.id]
      const newCount = state.items[action.payload.id]
      && state.items[action.payload.id].hasOwnProperty('count')
          ? Math.max(item.count - 1, 0)
          : 0

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            count: newCount
          }
        }
      }
    }
    case INC_CART:
      return {
        ...state,
        totalCount: state.totalCount + action.payload
      }
    case DEC_CART:
      return {
        ...state,
        totalCount: Math.max(state.totalCount - action.payload, 0)
      }
    default:
      return {...state}
  }
}