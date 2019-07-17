import React from 'react'
import './style.css'
import {Link} from "react-router-dom"

export default class Navigation extends React.Component {

    componentWillMount() {
        this.items = ['Delivery', 'About us']
    }

    render() {
        return (
            <ul className="navigation">
                {
                    this.items.map((item, index) => (
                        <li className="navigation__item" key={index}>
                            <Link to="#" className="navigation__link">
                                {item}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}