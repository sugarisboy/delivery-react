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
            <div>
                <Link to={itemsInShop > 0 ? `/checkout/${shopId}` : `#`}>
                    <button className="header-cart">
                        {itemsInShop > 0 && (
                            <div className="header-cart__counter">
                                {itemsInShop}
                            </div>
                        )}
                    </button>
                </Link>
            </div>
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