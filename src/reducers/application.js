import { SHADE, USER_LOGIN_POPUP } from '../actions-types'

const initialState = {
    isShaded: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_POPUP:
            return {
                ...state,
                userLoginPopup: action.payload
            }
        case SHADE:
            return {
                ...state,
                isShaded: action.payload
            }
        default:
            return {...state}
    }
}