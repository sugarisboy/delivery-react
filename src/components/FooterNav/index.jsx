import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 2 0 auto;
    margin: 0 auto;
    
    @media (${CSS_MOBILE}) {
        margin: 0;
        flex-direction: column;
    }
`

const Submenu = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0 60px;
    
    @media (${CSS_MOBILE}) {
        margin: 30px 0;
    }
`

const NavItem = styled.li`
    font-size: 13px;
    color: #5e5e5e;
    margin: 7px 0;
    
    @media (${CSS_MOBILE}) {
        font-size: 1em;
    }
`

const NavItemHead = styled(NavItem)`
    font-weight: bold;
    color: #393939;
    margin: 0 0 7px 0;
`

const NavLink = styled(Link)`
    color: #5e5e5e;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }
`

export default class FooterNav extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            items: [
                {
                    'Join Us': [
                        'item1',
                        'item2',
                        'item3'
                    ]
                },
                {
                    'Help': [
                        'item1',
                        'item2',
                        'item3'
                    ]
                },
                {
                    'Legal': [
                        'item1',
                        'item2',
                        'item3'
                    ]
                },
                {
                    'Follow Us': [
                        'item1',
                        'item2',
                        'item3'
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <Nav>
                {this.state.items.map(menuObject => {
                    const header = Object.keys(menuObject)[0]
                    const subItems = menuObject[header]

                    return (
                        <Submenu key={header}>
                            <NavItemHead>
                                {header}
                            </NavItemHead>

                            {subItems.map(subItem => (
                                <NavItem key={subItem}>
                                    <NavLink to="#">
                                        {subItem}
                                    </NavLink>
                                </NavItem>
                            ))}
                        </Submenu>)
                })}
            </Nav>
        )
    }

}