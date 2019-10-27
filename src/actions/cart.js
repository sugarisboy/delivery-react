import { ADD_ITEM, REMOVE_ITEM, REMOVE_SHOP, SET_ITEMS } from './actions-types'
import { store } from '../store'

export function addItem(shopId, id, count = 1) {
    return async dispatch => {
        await dispatch({
            type: ADD_ITEM,
            payload: {
                shopId,
                id,
                count
            }
        })
        localStorage.setItem('cart', JSON.stringify(store.getState().cart))
    }
}

export function removeItem(shopId, id, count = 1) {
    return async dispatch => {
        await dispatch({
            type: REMOVE_ITEM,
            payload: {
                shopId,
                id,
                count
            }
        })
        localStorage.setItem('cart', JSON.stringify(store.getState().cart))
    }
}

export function removeShop(shopId) {
    return async dispatch => {
        await dispatch({
            type: REMOVE_SHOP,
            payload: {
                shopId,
            },
        })
        localStorage.setItem('cart', JSON.stringify(store.getState().cart))
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