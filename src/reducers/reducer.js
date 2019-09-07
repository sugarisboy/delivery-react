import {combineReducers} from 'redux'
import cart from './cart'
import application from './application'

export const rootReducer = combineReducers({
    cart, application
})