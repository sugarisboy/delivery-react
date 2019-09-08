import React from 'react'
import './style.css'
import {Link} from "react-router-dom"

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
            <nav className="footer-nav">
                {
                    this.state.items.map(menuObject => {
                        const header = Object.keys(menuObject)[0]
                        const subItems = menuObject[header]

                        return (
                            <ul key={header} className="footer-nav__submenu">
                                <li className="footer-nav__item footer-nav__item_head">
                                    {header}
                                </li>

                                {
                                    subItems.map(subItem => (
                                    <li key={subItem} className="footer-nav__item">
                                        <Link to="#" className="footer-nav__link">
                                            {subItem}
                                        </Link>
                                    </li>
                                    ))
                                }
                            </ul>)
                        })
                }
            </nav>
        )
    }

}