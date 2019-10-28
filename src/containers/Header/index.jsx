import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../Navigation'
import CartButton from '../CartButton'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 15px;
    
    @media (${CSS_MOBILE}) {
        flex-direction: column;
    }
`

class Header extends React.Component {

    render() {
        return (
            <HeaderStyled>
                <Logo/>
                <Navigation/>
                {this.props.openedShopId > 0 && <CartButton/>}
            </HeaderStyled>
        )
    }
}

const mapStateToProps = state => ({
    openedShopId: state.shop.openedShopId
})

export default connect(mapStateToProps)(Header)