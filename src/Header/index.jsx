import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation';
import CartButton from '../CartButton';
import './style.css';

export default class Header extends React.Component {

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