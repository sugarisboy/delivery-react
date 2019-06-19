import React from 'react'
import './style.css'

export default class FooterNav extends React.Component {

    constructor(props) {
        super(props);

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
        };
        console.log(this.state.items);
    }

    render() {
        return (
            <nav class="footer-nav">
                {
                    this.state.items.map(menuObject => {
                        const header = Object.keys(menuObject)[0];
                        const subItems = menuObject[header];

                        return (
                            <ul class="footer-nav__submenu">
                                <li class="footer-nav__item footer-nav__item_head">
                                    {header}
                                </li>

                                {
                                    subItems.map(si => (
                                    <li class="footer-nav__item">
                                        <a href="#" class="footer-nav__link">{si}</a>
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