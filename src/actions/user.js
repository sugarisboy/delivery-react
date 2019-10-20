import { SET_ADDRESS } from './actions-types'

export function setAddress(address) {
    return dispatch => {
        dispatch({
            type: SET_ADDRESS,
            payload: address
        })
        localStorage.setItem('address', address)
    }
}