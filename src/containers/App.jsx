import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainPage from '../components/MainPage'
import ShopPage from './ShopPage'
import SearchBar from "../components/SearchBar"
import LoginPopup from './LoginPopup'
import Shade from './Shade'
import 'minireset.css/minireset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.scss'
import { setShade } from '../actions/application'

class App extends React.Component {

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

export default App