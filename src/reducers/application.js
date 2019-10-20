import { ADD_TO_MENU, REMOVE_FROM_MENU, SHADE, USER_LOGIN_POPUP } from '../actions/actions-types'

const initialState = {
    isShaded: false,
    userLoginPopup: false,
    menu: [
        {
            name: 'Delivery',
            link: '#'
        },
        {
            name: 'About us',
            link: '#'
        },
        {
            name: 'Login',
            action: 'OPEN_LOGIN_POPUP'
        }
    ]
}

export default (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case SHADE:
            return {
                ...state,
                isShaded: payload
            }
        case USER_LOGIN_POPUP:
            return {
                ...state,
                userLoginPopup: action.payload
            }
        case ADD_TO_MENU: {
            const newItems = state.menu.slice()
            newItems.push(payload)

            return {
                ...state,
                menu: newItems
            }
        }
        case REMOVE_FROM_MENU: {
            const itemIndex = state.menu
                .findIndex(item => item.name === payload)

            if (itemIndex === -1) {
                return {
                    ...state
                }
            }

            const newItems = state.menu.slice()
            newItems.splice(itemIndex, 1)

            return {
                ...state,
                menu: newItems
            }
        }
        default:
            return {
                ...state
            }
    }
}