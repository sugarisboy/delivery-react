import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './style.scss'
import { login } from '../../actions/auth'
import QwikInput from '../../components/QwikInput'

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

                        <QwikInput name="email" title="Email" type="email" onChange={this.handleChange}/>
                        <QwikInput name="password" title="Password" type="password" onChange={this.handleChange}/>

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

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(LoginPopup)