import React from 'react'
import Header from './Header'
import Footer from './Footer'
import MainPage from './MainPage'
import ShopPage from './ShopPage'
import 'minireset.css/minireset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'
import {Route, Switch} from "react-router-dom"
import SearchBar from "./SearchBar"

export default function App() {
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
            <Footer/>
        </div>
    )
}