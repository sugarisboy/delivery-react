import React from 'react'
import { connect } from 'react-redux'

class CheckoutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Checkout</h1>

            </React.Fragment>
        )

    }
}

const mapDispatchToProps = {
}

const mapStateToProps = state => ({
    openedShopId: state.shop.openedShopId
})

export default connect()(CheckoutPage)