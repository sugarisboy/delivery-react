import React, { Component } from 'react'
import { post } from '../../service/api'
import { connect } from 'react-redux'
import OrderProduct from '../OrderProduct'
import { getStatusText } from '../../utils'

class OrderHistory extends Component {

    constructor(props) {
        super(props)

        this.state = {
            orders: []
        }
    }

    async componentDidMount() {
        const response = await post('/order/page/', {
            userId: this.props.userData.id
        })
        this.setState({
            orders: response.data.orders
        })
    }


    render() {
        const {orders} = this.state

        return (
            <div>
                <h2>Order History</h2>
                <ul>
                    {orders.map(order => {
                        const {products} = order

                        return (
                            <li key={order.id}>
                                <p>Address: {order.address}</p>
                                <p>Price: ${order.cost}</p>
                                <p>Status: {getStatusText(order.status)}</p>
                                <p>Date: {order.createdTime}</p>
                                <ul>
                                    {products.map(product => (
                                        <li key={product.productId}>
                                            <OrderProduct id={product.productId} count={product.count}/>
                                        </li>
                                    ))}
                                </ul>
                                <hr/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    userData: state.auth.userData
})

export default connect(mapStateToProps)(OrderHistory)