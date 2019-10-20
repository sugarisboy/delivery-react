import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../containers/Header'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'
import ShopPage from './ShopPage'
import SearchBar from '../components/SearchBar'
import LoginPopup from './LoginPopup'
import Shade from './Shade'
import 'minireset.css/minireset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.scss'
import { connect } from 'react-redux'
import { setItems } from '../actions/cart'
import { checkAuth } from '../actions/auth'
import CheckoutPage from './CheckoutPage'
import ProfilePage from './ProfilePage'
import { applyAddress } from '../reducers/user'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.loadCartFromLocalStorage()
        this.props.checkAuth()
        this.props.applyAddress()
    }

    loadCartFromLocalStorage() {
        const lsCart = localStorage.getItem('cart')
        try {
            const cartItems = JSON.parse(lsCart)
            if (cartItems && Object.keys(cartItems).length > 0) {
                this.props.setItems(cartItems)
            }
        } catch (e) {
            localStorage.removeItem('cart')
        }
    }

    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header/>
                    <SearchBar/>
                    <Switch>
                        <Route exact path="/" component={MainPage}/>
                        <Route path="/shop/:id" component={ShopPage}/>
                        <Route path="/checkout/:id" component={CheckoutPage}/>
                        <Route path="/profile" component={ProfilePage}/>
                    </Switch>
                </div>
                <Shade>
                    <LoginPopup/>
                </Shade>
                <Footer/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    setItems, checkAuth, applyAddress
}

export default connect(null, mapDispatchToProps)(App)