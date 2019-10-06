import React from 'react'
import './style.css'
import { connect } from 'react-redux'

class CartButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { totalCount } = this.props.cart

        return (
            <button className="header-cart">
                {totalCount > 0 && (
                    <div className="header-cart__counter"
                         onClick={() => this.onClick()}>

                        {totalCount}
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