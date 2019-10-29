import { applyMiddleware, compose, createStore } from 'redux'
import {rootReducer} from './reducers/reducer'
import thunk from 'redux-thunk'

const composed = window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    : compose(applyMiddleware(thunk))

export const store = createStore(
    rootReducer,
    composed
)