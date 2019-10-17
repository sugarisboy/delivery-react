import { CLOSE_SHOP, OPEN_SHOP } from './actions-types'

export function openShop(id) {
    return dispatch => {
        dispatch({
            type: OPEN_SHOP,
            payload: id
        })
    }
}

export function closeShop() {
    return dispatch => {
        dispatch({
            type: CLOSE_SHOP
        })
    }
}