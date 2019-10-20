import { SET_ADDRESS, SET_USER_DATA } from '../actions/actions-types'

const initialState = {
    address: null
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_ADDRESS:
            return {
                ...state,
                address: payload
            }
        default:
            return {...state}
    }
}