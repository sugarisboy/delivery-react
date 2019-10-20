import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SET_USER_DATA } from '../actions/actions-types'

const initialState = {
    isLoggedIn: false,
    isShaded: false,
    userData: {
        id: 0,
        username: ''
    },
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
        case SET_USER_DATA:
            return {
                ...state,
                userData: payload
            }
        default:
            return {...state}
    }
}