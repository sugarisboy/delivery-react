import React, { Component } from 'react'
import { connect } from 'react-redux'
import { get } from '../../service/api'
import OrderForm from '../OrderForm'
import { addItem, removeItem } from '../../actions/cart'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const ItemButton = styled.button`
    appearance: none;
    margin: 0 15px;
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 29px;
    border: none;
    background: #f6f6f6;
    color: #699ce4;
    font-size: 32px;
    user-select: none;
`

const ItemCount = styled.span`
    font-size: 18px;
`

const CheckoutBlock = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: row;
    
    @media (${CSS_MOBILE}) {
        flex-direction: column;
    }
`

const CheckoutItem = styled.div`
    display: flex;
    padding: 40px 20px;
    
    @media (${CSS_MOBILE}) {
        flex-direction: column;
    }
`

const CheckoutList = styled.div`
    flex: 1 0 auto;
`

const ItemTitle = styled.p`
    font-size: 16px;
    margin-bottom: 7px;
`

const ItemDescription = styled.span`
    color: grey;
`

const ItemData = styled.div`
    margin-left: auto;
    display: flex;
    
    @media (${CSS_MOBILE}) {
        flex-direction: column;
    }
`

const Count = styled.div`
    margin: 0 50px;
    display: flex;
    align-items: center;
`

const Total = styled.h2`
    text-align: right;
    margin: 40px 20px;
`

const AdditionalBlock = styled.div`
    margin-left: auto;
`
const Prices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100px;
`

const OnePrice = styled.span`
    font-size: 18px;
    color: grey;
`

const TotalItemPrice = styled.span`
    font-size: 24px;
`

class CheckoutPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            shop: null,
            checkoutItems: [],
            totalPrice: 0
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

        if (shopCart) {
            for (let item in shopCart) {
                if (shopCart.hasOwnProperty(item) && shopCart[item].hasOwnProperty('count')) {
                    const resp = await get(`/product/${item}`)
                    const productData = resp.data
                    const count = shopCart[item].count

                    const currentProductPrice = productData.price * count
                    totalPrice += currentProductPrice

                    checkoutItems.push({
                        ...productData,
                        count,
                    })
                }
            }

            totalPrice += shop.deliveryCost
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
            <div>
                {shop && (
                    <CheckoutBlock>
                        <CheckoutList>
                            <h1>Checkout {shop.name}</h1>
                            <div>
                                {checkoutItems.map(item => (
                                    <div key={item.id}>
                                        <CheckoutItem>
                                            <div>
                                                <ItemTitle>
                                                    {item.title}
                                                </ItemTitle>
                                                <ItemDescription>
                                                    Description {item.description}
                                                </ItemDescription>
                                            </div>
                                            <ItemData>
                                                <Count>
                                                    <ItemButton onClick={() => removeItem(shop.id, item.id)}>
                                                        -
                                                    </ItemButton>
                                                    <ItemCount>
                                                        {item.count}
                                                    </ItemCount>
                                                    <ItemButton onClick={() => addItem(shop.id, item.id)}>
                                                        +
                                                    </ItemButton>
                                                </Count>
                                                <Prices>
                                                    <OnePrice>
                                                        ${item.price}
                                                    </OnePrice>
                                                    <TotalItemPrice>
                                                        ${(item.count * item.price).toFixed(2)}
                                                    </TotalItemPrice>
                                                </Prices>
                                            </ItemData>
                                        </CheckoutItem>
                                        <hr/>
                                    </div>
                                ))}
                            </div>
                            <h3>
                                Delivery: ${shop.deliveryCost}
                            </h3>
                            <Total>
                                TOTAL ${totalPrice.toFixed(2)}
                            </Total>
                        </CheckoutList>
                        <AdditionalBlock>
                            <OrderForm shopId={shop.id}/>
                        </AdditionalBlock>
                    </CheckoutBlock>
                )}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    cart: state.cart
})

const mapDispatchToProps = { addItem, removeItem }

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)