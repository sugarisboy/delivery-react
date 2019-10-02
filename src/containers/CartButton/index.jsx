import React from 'react'
import './style.css'
import { connect } from 'react-redux'

class CartButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button className="header-cart">
                {this.props.cart.totalCount && (
                    <div className="header-cart__counter"
                         onClick={() => this.onClick()}>

                        {this.props.cart.totalCount}
                    </div>
                )}
            </button>
        )
    }

}

function mapStateToProps(store) {
    return {
        cart: store.cart
    }
}

export default connect(mapStateToProps)(CartButton)