import { ADD_ITEM, DEC_CART, INC_CART, REMOVE_ITEM } from '../actions-types'

export function addItem(id) {
    return dispatch => {
        dispatch({
            type: ADD_ITEM,
            payload: {
                id: id,
            }
        })
        dispatch({
            type: INC_CART,
            payload: 1
        })
    }
}

export function removeItem(id) {
    return dispatch => {
        dispatch({
            type: REMOVE_ITEM,
            payload: {
                id: id,
            }
        })
        dispatch({
            type: DEC_CART,
            payload: 1
        })
    }
}
