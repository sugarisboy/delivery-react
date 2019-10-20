import { SET_ADDRESS } from '../actions/actions-types'

const initialState = {
    location: {
        label: '',
        address: {}
    }
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_ADDRESS:
            return {
                ...state,
                location: payload
            }
        default:
            return {...state}
    }
}

export function applyAddress() {
    return dispatch => {
        
    }
}