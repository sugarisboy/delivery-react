import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openLoginPopup } from '../../actions/application'
import { logout } from '../../actions/auth'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const NavList = styled.ul`
    display: flex;
    margin: 0 auto;
    
    @media (${CSS_MOBILE}) {
        flex-direction: column;
        align-items: center;
        margin: 15px auto;
    }
`

const NavItem = styled.li`
    margin: 0 16px;
    
    @media (${CSS_MOBILE}) {
        margin: 10px;
    }
`

const NavLink = styled(Link)`
    color: #393939;
    font-size: 18px;
    text-decoration: none;
    font-weight: bold;
`

class Navigation extends React.Component {

    callAction = action => {
        if (!action) return

        switch (action) {
            case 'OPEN_LOGIN_POPUP':
                this.props.openLoginPopup()
                break
            case 'LOGOUT':
                this.props.logout()
                break
        }
    }

    render() {
        return (
            <NavList>
                {this.props.menu.map((item, index) => (
                    <NavItem key={index}>
                        <NavLink to={item.link || '#'}
                              onClick={() => this.callAction(item.action)}
                              className="navigation__link">
                            {item.name}
                        </NavLink>
                    </NavItem>
                ))}
            </NavList>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username,
    menu: state.application.menu
})

const mapDispatchToProps = {
    openLoginPopup, logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)