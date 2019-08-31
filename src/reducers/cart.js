import {ADD_ITEM, REMOVE_ITEM} from '../actions'

const defaultState = {
  items: 0
}

export default (state = {defaultState}, action) => {
  console.log('reducer', action, state)

  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items + action.payload.count
      }
    case REMOVE_ITEM:
      return {
        ...state
      }
    default:
      return state
  }
}