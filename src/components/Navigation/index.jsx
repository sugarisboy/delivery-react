import React from 'react'
import './style.css'
import {Link} from "react-router-dom"
import {connect} from "react-redux";
import {store} from "../../store";

class Navigation extends React.Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.items = [
            {
                name: 'Delivery',
                link: '#'
            },
            {
                name: 'About us',
                link: '#'
            },
            {
                name: 'Login',
                onClick: this.onLoginClick
            }
        ]
    }

    onLoginClick() {
        store.dispatch({
            type: 'OPEN_USER_LOGIN',
            payload: {
                isOpen: true
            }
        })
    }

    render() {
        return (
            <ul className="navigation">
                {
                    this.items.map((item, index) => (
                        <li className="navigation__item" key={index}>
                            <Link to={item.link || '#'}
                                  onClick={() => item.onClick && item.onClick()}
                                  className="navigation__link">
                                {item.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Navigation)