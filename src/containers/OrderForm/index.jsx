import React from 'react'
import QwikInput from '../../components/QwikInput'
import QwikTextarea from '../../components/QwikTextarea'
import './style.scss'
import { connect } from 'react-redux'

class OrderForm extends React.Component {

    render() {
        const {user} = this.props

        return (
            <div>
                <form className="order-form">
                    <QwikInput name="address" title="Address" type="text" defaultValue={user.location.label}/>
                    <QwikInput name="firstName" title="First Name" type="text"/>
                    <QwikInput name="lastName" title="Last Name" type="text"/>
                    <QwikInput name="phone" title="Phone" type="tel"/>
                    <QwikInput name="email" title="Email" type="email"/>
                    <QwikTextarea name="comment" title="Comment" cols={30} rows={10}/>

                    <button type="submit" className="button">Next</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth
})

export default connect(mapStateToProps)(OrderForm)