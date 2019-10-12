import React from 'react'
import './style.css'
import { connect } from 'react-redux'

class CartButton extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {cart, shop} = this.props
        const shopId  = shop.openedShopId
        const itemsInShop = cart[shopId] && cart[shopId].totalCount || 0

        return (
            <button className="header-cart">
                {itemsInShop > 0 && (
                    <div className="header-cart__counter"
                         onClick={() => this.onClick()}>
                        {itemsInShop}
                    </div>
                )}
            </button>
        )
    }

}

function mapStateToProps(store) {
    return {
        cart: store.cart,
        shop: store.shop
    }
}

export default connect(mapStateToProps)(CartButton)