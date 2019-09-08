import React from 'react'
import Logo from '../Logo'
import Navigation from '../../containers/Navigation'
import CartButton from '../../containers/CartButton'
import './style.css'

export default class Header extends React.PureComponent {

    render() {
        return (
            <header className="header">
                <Logo/>
                <Navigation/>
                <CartButton/>
            </header>
        )
    }

}