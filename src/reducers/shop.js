import { CLOSE_SHOP, OPEN_SHOP } from '../actions-types'

const initialState = {
    openedShopId: 0
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case OPEN_SHOP:
            return {
                ...state,
                openedShopId: payload
            }
        case CLOSE_SHOP:
            return {
                ...state,
                openedShopId: null
            }
        default:
            return {
                ...state
            }
    }
}