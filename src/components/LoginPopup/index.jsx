import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import './style.scss'

class LoginPopup extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            role: 'User'
        }
    }


    render() {
        return (
            <div className="login">
                <div className="login__head">
                    Login as<br/>
                    {this.state.role}
                </div>
                <div className="login__block">
                    <form className="login__form">
                        <input type="text" name="email" placeholder="email"/>
                        <input type="password" name="password" placeholder="password"/>
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

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(LoginPopup)