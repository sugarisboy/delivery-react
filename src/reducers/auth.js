import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SET_USERNAME } from '../actions-types'

const initialState = {
    isLoggedIn: false,
    isShaded: false,
    username: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload
            }
        default:
            return {...state}
    }
}