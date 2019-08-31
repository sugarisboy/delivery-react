import {combineReducers} from 'redux'
import cart from './reducers/cart'

export default () => {
    combineReducers({
        cart
    })
}