import {createStore} from 'redux'
import reducer from './reducers/cart'

export const store = createStore(reducer)