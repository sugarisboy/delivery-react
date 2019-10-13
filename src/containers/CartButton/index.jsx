import React from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CartButton extends React.Component {

    render() {
        const {cart, shop} = this.props
        const shopId  = shop.openedShopId
        const itemsInShop = (cart[shopId] && cart[shopId].totalCount) || 0

        return (
            <React.Fragment>
                <Link to={`/checkout/${shopId}`}>
                    <button className="header-cart">
                        {itemsInShop > 0 && (
                            <div className="header-cart__counter"
                                 onClick={() => this.onClick()}>
                                {itemsInShop}
                            </div>
                        )}
                    </button>
                </Link>
            </React.Fragment>
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