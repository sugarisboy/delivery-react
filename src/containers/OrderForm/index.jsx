import React from 'react'
import clsx from 'clsx'
import './style.scss'

class OrderForm extends React.Component {
    render() {
        return (
            <form className={clsx('order-form')}>
                <label className={clsx('order-form__label')}>
                    <span>Full Name</span>
                    <input type="text" name="name" placeholder="Full name"/>
                </label>
                <label className={clsx('order-form__label')}>
                    <span>Phone</span>
                    <input type="tel" name="phone" placeholder="Phone"/>
                </label>
                <label className={clsx('order-form__label')}>
                    <span>Address</span>
                    <input type="text" name="address" placeholder="Address"/> {/*TODO autocomplete*/}
                </label>
                <label className={clsx('order-form__label')}>
                    <span>Email</span>
                    <input type="email" name="email" placeholder="Email"/>
                </label>
                <label className={clsx('order-form__label')}>
                    <span>Comment</span>
                    <textarea name="comment" cols="30" rows="10" placeholder="Comment"/>
                </label>
                <button type="submit">Next</button>
            </form>
        )
    }
}

export default OrderForm