import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.scss'

class LoginPopup extends React.Component {

    constructor(props) {
        super(props)

        this.data = {}
    }

    onSubmit = e => {
        e.preventDefault()

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
                        <input type="text"
                               name="email"
                               placeholder="email"
                               onChange={this.handleChange}
                        />

                        <input type="password"
                               name="password"
                               placeholder="password"
                               onChange={this.handleChange}
                        />

                        <label>
                            <input type="checkbox" name="keep-me-logged-in"/>
                            Keep me logged in?
                        </label>
                        <button type="submit">Login</button>
                    </form>
                    <Link to="/forgot">Forgot you password?</Link>
                </div>
            </div>
        )
    }

}

export default connect()(LoginPopup)