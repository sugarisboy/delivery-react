import React from 'react';
import './style.css';

export default class Navigation extends React.Component {

    componentWillMount() {
        this.items = ['Delivery', 'About us'];
    }

    render() {
        return (
            <ul className="navigation">
                {
                    this.items.map((item, index) => (
                        <li className="navigation__item" key={index}>
                            <a href="#" className="navigation__link">
                                {item}
                            </a>
                        </li>
                    ))
                }
            </ul>
        )
    }
}