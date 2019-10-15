import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from '../../service/api'
import OrderForm from '../OrderForm'
import { addItem, removeItem } from '../../actions/cart'

class CheckoutPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            shop: null,
            checkoutItems: [],
            totalPrice: 0
        }

        this.button = {
            appearance: 'none',
            margin: '0 15px',
            padding: 0,
            width: 40,
            height: 40,
            borderRadius: 29,
            border: 'none',
            background: '#f6f6f6',
            color: '#699ce4',
            fontSize: 32,
            userSelect: 'none'
        }
    }

    async updatePage() {
        const {match, cart} = this.props
        const shopId = match.params.id

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

    async componentDidMount() {
        this.updatePage()
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            return
        }

        this.updatePage()
    }

    render() {
        const { shop, checkoutItems, totalPrice } = this.state
        const { addItem, removeItem } = this.props

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
                                    <div key={item.id}>
                                        <div style={{
                                            display: 'flex',
                                            padding: '40px 20px'
                                        }}>
                                            <div>
                                                <p style={{
                                                    fontSize: 16,
                                                    marginBottom: 7
                                                }}>
                                                    {item.title}
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
                                            }}>
                                                <div style={{
                                                    margin: '0 50px',
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                }}>
                                                    <button style={this.button}
                                                            onClick={() => removeItem(shop.id, item.id)}>
                                                        -
                                                    </button>
                                                    <span style={{ fontSize: 18 }}>
                                                        {item.count}
                                                    </span>
                                                    <button style={this.button}
                                                            onClick={() => addItem(shop.id, item.id)}>
                                                        +
                                                    </button>
                                                </div>
                                                <div style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'flex-end',
                                                    width: 100
                                                }}>
                                                    <span style={{
                                                        fontSize: 18,
                                                        color: 'grey',
                                                    }}>
                                                        ${item.price}
                                                    </span>
                                                        <span style={{
                                                            fontSize: 24,
                                                        }}>
                                                        ${item.count * item.price}
                                                    </span>
                                                </div>
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

const mapDispatchToProps = { addItem, removeItem }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)