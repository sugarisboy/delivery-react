import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToMenu, openLoginPopup, removeFromMenu } from '../../actions/application'

class Navigation extends React.Component {

    async update() {
    }

    componentDidMount() {
        // this.update()
    }

    callAction = action => {
        console.log(action)
        if (!action) return

        switch (action) {
            case 'OPEN_LOGIN_POPUP':
                this.props.openLoginPopup()
                break
        }
    }

    render() {
        return (
            <ul className="navigation">
                {this.props.menu.map((item, index) => (
                    <li className="navigation__item" key={index}>
                        <Link to={item.link || '#'}
                              onClick={() => this.callAction(item.action)}
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
    username: state.auth.username,
    menu: state.application.menu
})

const mapDispatchToProps = {
    openLoginPopup, addToMenu, removeFromMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)