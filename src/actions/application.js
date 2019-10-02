import { LOGOUT, SHADE, USER_LOGIN_POPUP } from '../actions-types'

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