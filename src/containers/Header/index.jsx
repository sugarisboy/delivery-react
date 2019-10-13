import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../Navigation'
import CartButton from '../CartButton'
import './style.css'
import { connect } from 'react-redux'

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <Logo/>
                <Navigation/>
                {this.props.openedShopId > 0 && <CartButton/>}
            </header>
        )
    }
}

const mapStateToProps = state => ({
    openedShopId: state.shop.openedShopId
})

export default connect(mapStateToProps)(Header)