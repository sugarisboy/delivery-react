import React, { Component } from 'react'

class ProfilePage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Profile</h1>

                <form>
                    <label className="input">
                        <span className="input__title">Email</span>
                        <input type="email" name="email" placeholder="Email" className="input__area"/>
                    </label>

                    <label className="input">
                        <span className="input__title">First name</span>
                        <input type="text" name="firstName" placeholder="First Name" className="input__area"/>
                    </label>
                    <label className="input">
                        <span className="input__title">Last name</span>
                        <input type="text" name="lastName" placeholder="Last Name" className="input__area"/>
                    </label>

                    <label className="input">
                        <span className="input__title">Password</span>
                        <input type="password" name="password" placeholder="Password" className="input__area"/>
                    </label>
                    <label className="input">
                        <span className="input__title">Password repeat</span>
                        <input type="password" name="passwordRepeat" placeholder="Password repeat" className="input__area"/>
                    </label>
                    <button type="submit" className="button">Update</button>
                </form>
            </div>
        )
    }


}

export default ProfilePage