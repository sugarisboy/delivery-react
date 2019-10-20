import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, SET_USER_DATA, SHADE } from './actions-types'
import moment from 'moment'
import { post } from '../service/api'
import { addToMenu, removeFromMenu } from './application'

let loginErrorTimeout

export function successLogin() {
    return dispatch => {
        dispatch({
            type: LOGIN_SUCCESS
        })
        dispatch({
            type: SHADE,
            payload: false
        })
    }
}

export function failLogin(error) {
    return dispatch => {
        dispatch({
            type: LOGIN_ERROR,
            payload: error
        })
        clearTimeout(loginErrorTimeout)
        loginErrorTimeout = setTimeout(() => {
            dispatch({
                type: LOGIN_ERROR,
                loginError: null
            })
        }, 3000)
    }
}

export function login(username, password) {
    return async dispatch => {
        try {
            const response = await post('/auth/login',
                {username, password})

            const {access, key} = response.data
            const tokenData = parseJwt(access)
            const id = tokenData.id

            if (access && key) {
                localStorage.setItem('token', access)
                localStorage.setItem('key', key)

                dispatch(successLogin())
                dispatch(setUser({username, id}))
                dispatch(updateMenu(true, username))
            } else {
                dispatch(failLogin('Unknown Error'))
            }
        } catch (e) {
            dispatch(failLogin(e.response.data.message))
        }
    }
}

function updateMenu(isLoggedIn, username) {
    return async dispatch => {
        if (isLoggedIn) {
            await dispatch(removeFromMenu('Login'))
            await dispatch(addToMenu({
                name: username,
                link: '/profile'
            }))
            await dispatch(addToMenu({
                name: 'Logout',
                action: 'LOGOUT'
            }))
        } else {
            await dispatch(addToMenu({
                name: 'Login',
                action: 'OPEN_LOGIN_POPUP'
            }))
        }
    }
}

export function setUser(userData) {
    return dispatch => {
        dispatch({
            type: SET_USER_DATA,
            payload: userData
        })
    }
}

export function checkAuth() {
    return async dispatch => {
        const token = localStorage.getItem('token')

        if (!token) {
            dispatch(failLogin())
        } else {
            const tokenData = parseJwt(token)
            const now = moment()
            const expDate = moment(tokenData.exp * 1000)

            const username = tokenData.sub
            const id = tokenData.id

            if (expDate.isAfter(now)) {
                dispatch(successLogin())
                dispatch(setUser({username, id}))
                dispatch(updateMenu(true, username))
            } else {
                dispatch(failLogin())
                localStorage.removeItem('token')
            }
        }
    }
}

function parseJwt(token) {
    const base64Url = token.split('.')[1]
    const base64 = base64Url
        .replace(/-/g, '+')
        .replace(/_/g, '/')

    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map(c => {
                return '%'
                    + ('00' + c.charCodeAt(0).toString(16))
                        .slice(-2)
            }).join(''))

    return JSON.parse(jsonPayload)
}

export function logout() {
    return dispatch => {
        localStorage.removeItem('token')
        localStorage.removeItem('key')

        dispatch({
            type: LOGOUT
        })
        setUser(null)
    }
}