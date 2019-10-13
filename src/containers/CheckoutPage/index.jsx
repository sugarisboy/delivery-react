import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { get } from '../../service/api'
import OrderForm from '../OrderForm'

class CheckoutPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            shop: null,
            checkoutItems: [],
            totalPrice: 0
        }
    }

    componentDidMount() {
        this.forceUpdate()
    }

    async componentDidUpdate(prevProps) {
        const {match, cart} = this.props

        if (!match) {
            return
        }

        const shopId = match.params.id
        const prevShopId = prevProps.match.params.id

        if (shopId !== prevShopId || this.state.shop === null) {
            const resp = await get(`/shop/${shopId}`)
            const shop = resp.data
            const shopCart = cart[shopId]

            let totalPrice = 0
            const checkoutItems = []
            for (let item in shopCart) {
                if (shopCart.hasOwnProperty(item) && shopCart[item].hasOwnProperty('count')) {
                    const resp = await get(`/product/${item}`)
                    const productData = resp.data
                    const count = shopCart[item].count

                    totalPrice += (productData.price * count)

                    checkoutItems.push({
                        ...productData,
                        count
                    })
                }
            }

            console.log(checkoutItems)

            this.setState({ shop, checkoutItems, totalPrice })
        }
    }

    render() {
        const { shop, checkoutItems, totalPrice } = this.state

        return (
            <Fragment>
                {shop && (
                    <Fragment>
                        <h1>Checkout {shop.name}</h1>
                        <div>
                            {checkoutItems.map(item => (
                                <div key={item.id}>
                                    <span>ID {item.id}</span>,
                                    <span>Title {item.title}</span>,
                                    <span>Description {item.description}</span>,
                                    <span>Price ${item.price}</span>,
                                    <span>Count {item.count}</span>
                                </div>
                            ))}
                        </div>
                        <h2>Total Price: ${totalPrice}</h2>
                        <OrderForm/>
                    </Fragment>
                )}
            </Fragment>
        )

    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(CheckoutPage)