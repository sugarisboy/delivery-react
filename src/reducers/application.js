import { OPEN_USER_LOGIN } from '../actions'

const initialState = {
    shade: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_USER_LOGIN:
            return {
                ...state,
                shade: true
            }
        default:
            return {...state}
    }
}