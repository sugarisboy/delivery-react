import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../components/Header'
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

class App extends React.Component {

    constructor(props) {
        super(props)

        this.loadCartFromLocalStorage()
    }

    loadCartFromLocalStorage() {
        const cartItems = localStorage.getItem('cart')
        if (cartItems && Object.keys(cartItems).length > 0) {
            this.props.setItems(cartItems)
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