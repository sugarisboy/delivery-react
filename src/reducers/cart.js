import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS } from '../actions-types'

const initialState = {
  items: {},
  totalCount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const id = action.payload.id
      const item = state.items[id]
      const newTotal = state.totalCount + action.payload
      const newCount = state.items[id]
      && state.items[id].hasOwnProperty('count')
          ? item.count + 1
          : 1

      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]: {
            count: newCount
          }
        },
        totalCount: newTotal
      }
    }
    case REMOVE_ITEM: {
      const id = action.payload.id
      const count = action.payload.count

      const item = state.items[id]
      const newTotal = state.totalCount - count

      const newCount = Math.max(state.totalCount - action.payload.count, 0)
        && state.items[id].hasOwnProperty('count')
          ? Math.max(item.count - 1, 0)
          : 0

      return {
        ...state,
        items: {
          ...state.items,
          [id]: newCount === 0 ? undefined : { count: newCount }
        },
        totalCount: newTotal
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