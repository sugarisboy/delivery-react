import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openLoginPopup } from '../../actions/application'

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
        this.props.openLoginPopup()
    }

    render() {
        return (
            <ul className="navigation">
                {this.items.map((item, index) => (
                    <li className="navigation__item" key={index}>
                        <Link to={item.link || '#123'}
                              onClick={item.onClick && item.onClick.bind(this)}
                              className="navigation__link">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    openLoginPopup: () => dispatch(openLoginPopup())
})

export default connect(null, mapDispatchToProps)(Navigation)