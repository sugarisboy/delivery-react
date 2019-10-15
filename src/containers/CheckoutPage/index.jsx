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

            this.setState({ shop, checkoutItems, totalPrice })
        }
    }

    render() {
        const { shop, checkoutItems, totalPrice } = this.state

        return (
            <>
                {shop && (
                    <div style={{
                        margin: '50px 0',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <div style={{
                            flex: '1 0 auto'
                        }}>
                            <h1>
                                Checkout {shop.name}
                            </h1>
                            <div>
                                {checkoutItems.map(item => (
                                    <div>
                                        <div key={item.id} style={{
                                            display: 'flex',
                                            padding: '40px 20px'
                                        }}>
                                            <div>
                                                <p style={{
                                                    fontSize: 16,
                                                    marginBottom: 7
                                                }}>
                                                    {item.title}
                                                    <span style={{
                                                        color: 'grey'
                                                    }}>
                                                        &nbsp;x {item.count}
                                                    </span>
                                                </p>
                                                <small style={{
                                                    color: 'grey'
                                                }}>
                                                    Description {item.description}
                                                </small>
                                            </div>
                                            <div style={{
                                                marginLeft: 'auto',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'flex-end'
                                            }}>
                                                <span style={{
                                                    fontSize: 18,
                                                    color: 'grey'
                                                }}>
                                                    ${item.price}
                                                </span>
                                                <span style={{
                                                    fontSize: 24
                                                }}>
                                                    ${item.count * item.price}
                                                </span>
                                            </div>
                                        </div>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                            <h2 style={{
                                textAlign: 'right',
                                margin: '40px 20px'
                            }}>
                                TOTAL ${totalPrice}
                            </h2>
                        </div>
                        <div style={{
                            marginLeft: 'auto'
                        }}>
                            <OrderForm/>
                        </div>
                    </div>
                )}
            </>
        )

    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

export default connect(mapStateToProps)(CheckoutPage)