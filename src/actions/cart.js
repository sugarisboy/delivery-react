import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS } from '../actions-types'

export function addItem(shopId, id, count = 1) {
    return async dispatch => {
        const data = await dispatch({
            type: ADD_ITEM,
            payload: {
                shopId,
                id,
                count
            }
        })
        console.log(data)
    }
}

export function removeItem(shopId, id, count = 1) {
    return async dispatch => {
        dispatch({
            type: REMOVE_ITEM,
            payload: {
                shopId,
                id,
                count
            }
        })
    }
}

export function setItems(items) {
    return dispatch => {
        dispatch({
            type: SET_ITEMS,
            payload: items
        })
    }
}