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
import CheckoutPage from './CheckoutPage'

class App extends React.Component {

    constructor(props) {
        super(props)

        this.loadCartFromLocalStorage()
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

const mapDispatchToProps = dispatch => ({
    setItems: items => dispatch(setItems(items))
})

export default connect(null, mapDispatchToProps)(App)