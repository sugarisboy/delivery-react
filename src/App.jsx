import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ShopList from './ShopList'
import SearchBar from './SearchBar'
import 'minireset.css/minireset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.css'

export default function App() {
    return (
        <div className="wrapper">
            <Header/>
            <SearchBar/>
            <ShopList/>
            <Footer/>
        </div>
    )
}