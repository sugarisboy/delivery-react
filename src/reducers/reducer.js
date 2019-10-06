import { combineReducers } from 'redux'
import cart from './cart'
import application from './application'
import auth from './auth'
import shop from './shop'

export const rootReducer = combineReducers({
    cart, application, auth, shop
})