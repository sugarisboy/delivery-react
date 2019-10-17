import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SET_USERNAME } from '../actions/actions-types'

const initialState = {
    isLoggedIn: false,
    isShaded: false,
    username: '',
    loginError: null
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true
            }
        case LOGIN_ERROR: {
            return {
                ...state,
                loginError: payload
            }
        }
        case LOGOUT:
            return {
                ...state,
                isLoggedIn: false
            }
        case SET_USERNAME:
            return {
                ...state,
                username: payload
            }
        default:
            return {...state}
    }
}