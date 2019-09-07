import { ADD_ITEM, DEC_CART, INC_CART, REMOVE_ITEM } from '../actions'

export function addItem(id) {
    return {
        type: ADD_ITEM,
        payload: {
            id: id,
        }
    }
}

export function removeItem(id) {
    return {
        type: REMOVE_ITEM,
        payload: {
            id: id,
        }
    }
}

export function increaseCart(increment) {
    return {
        type: INC_CART,
        payload: increment
    }
}


export function decreaseCart(decrement) {
    return {
        type: DEC_CART,
        payload: decrement
    }
}