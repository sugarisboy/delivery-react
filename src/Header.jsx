import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import CartButton from './CartButton';

export default class Header extends React.Component {

    render() {
        return (
            <header>
                <Logo/>
                <Navigation/>
                <CartButton/>
            </header>
        )
    }

}