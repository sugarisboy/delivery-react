import { ADD_ITEM, REMOVE_ITEM, SET_ITEMS } from '../actions-types'

export function addItem(id, count = 1) {
    return dispatch => {
        dispatch({
            type: ADD_ITEM,
            payload: {
                id,
                count
            }
        })
    }
}

export function removeItem(id, count = 1) {
    return dispatch => {
        dispatch({
            type: REMOVE_ITEM,
            payload: {
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