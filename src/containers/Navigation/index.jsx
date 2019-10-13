import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { openLoginPopup } from '../../actions/application'

class Navigation extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            items: [
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
    }

    componentDidUpdate(prevProps) {
        const {isLoggedIn, username} = this.props

        if (isLoggedIn !== prevProps.isLoggedIn) {
            if (isLoggedIn) {
                this.deleteItem('Login')
            } else {
                this.addItem({
                    name: username,
                    link: '/profile'
                })
            }
        }
    }

    addItem(item) {
        this.setState((state) => ({
            items: state.items.slice().push(item)
        }))
    }

    deleteItem(name) {
        const itemIndex = this.state.items
            .findIndex(item => item.name === name)

        const newItems = this.state.items.slice(itemIndex, 1)
        this.setState({
            items: newItems
        })
    }


    onLoginClick() {
        this.props.openLoginPopup()
    }

    render() {
        return (
            <ul className="navigation">
                {this.state.items.map((item, index) => (
                    <li className="navigation__item" key={index}>
                        <Link to={item.link || '#'}
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

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username
})

const mapDispatchToProps = dispatch => ({
    openLoginPopup: () => dispatch(openLoginPopup())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)