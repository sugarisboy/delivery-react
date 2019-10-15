import React from 'react'
import './style.scss'

class OrderForm extends React.Component {
    render() {
        return (
            <form className="order-form">
                <label className="input">
                    <span className="input__title">Full Name</span>
                    <input type="text" name="name" placeholder="Full name" className="input__area"/>
                </label>
                <label className="input">
                    <span className="input__title">Phone</span>
                    <input type="tel" name="phone" placeholder="Phone" className="input__area"/>
                </label>
                <label className="input">
                    <span className="input__title">Address</span>
                    <input type="text" name="address" placeholder="Address" className="input__area"/>
                    {/*TODO autocomplete*/}
                </label>
                <label className="input">
                    <span className="input__title">Email</span>
                    <input type="email" name="email" placeholder="Email" className="input__area"/>
                </label>
                <label className="input">
                    <span className="input__title">Comment</span>
                    <textarea name="comment" cols="30" rows="10" placeholder="Comment" className="input__area"/>
                </label>
                <button type="submit" className="button">Next</button>
            </form>
        )
    }
}

export default OrderForm