import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'
import { login } from '../../actions/auth'

class LoginPopup extends React.Component {

    constructor(props) {
        super(props)

        this.data = {}
    }

    onSubmit = e => {
        const {email, password} = this.data
        e.preventDefault()
        this.props.login(email, password)
    }

    handleChange = e => {
        const {name, value} = e.target
        this.data[name] = value
    }

    render() {
        return (
            <div className="login">
                <div className="login__head">
                    Login as<br/>User
                </div>

                <div className="login__block">
                    <form className="login__form"
                          onSubmit={this.onSubmit}
                    >
                        <p className="login__error">
                            {this.props.auth.loginError}
                        </p>
                        <label className="input">
                            <span className="input__title">Email</span>
                            <input type="text"
                                   name="email"
                                   className="input__area"
                                   placeholder="Email"
                                   onChange={this.handleChange}
                            />
                        </label>

                        <label className="input">
                            <span className="input__title">Password</span>
                            <input type="password"
                                   name="password"
                                   className="input__area"
                                   placeholder="Password"
                                   onChange={this.handleChange}
                            />
                        </label>

                        <label className="keep">
                            <input type="checkbox" name="keep-me-logged-in" className="keep__checkbox"/>
                            <span className="keep__box"/>
                            <span className="keep__check"/>
                            <span className="keep__title">Keep me logged in?</span>
                        </label>

                        <button type="submit" className="button">Login</button>

                        <Link to="/forgot">Forgot you password?</Link>
                    </form>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup)