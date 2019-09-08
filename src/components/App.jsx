import React from 'react'
import {Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import MainPage from './MainPage'
import ShopPage from './ShopPage'
import SearchBar from "./SearchBar"
import LoginPopup from './LoginPopup'
import Shade from './Shade'
import 'minireset.css/minireset.css'
import '@fortawesome/fontawesome-free/css/all.css'
import './style.scss'

class App extends React.PureComponent {

    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape') {

            }
        })
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

function mapStateToProps(store) {
    return {
        ...store
    }
}

export default connect(mapStateToProps)(App)