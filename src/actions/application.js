import { ADD_TO_MENU, SHADE, USER_LOGIN_POPUP } from './actions-types'

export function setShade(isShaded) {
    return dispatch => {
        dispatch({
            type: SHADE,
            payload: isShaded
        })
    }
}

export function openLoginPopup() {
    return dispatch => {
        setShade(true)(dispatch)
        dispatch({
            type: USER_LOGIN_POPUP,
            payload: true
        })
    }
}

export function closeLoginPopup() {
    return dispatch => {
        setShade(false)
        dispatch({
            type: USER_LOGIN_POPUP,
            payload: false
        })
    }
}

export function addToMenu(item) {
    return dispatch => {
        dispatch({
            type: ADD_TO_MENU,
            payload: item
        })
    }
}

export function removeFromMenu(itemName) {
    return dispatch => {
        dispatch({
            type: ADD_TO_MENU,
            payload: itemName
        })
    }
}