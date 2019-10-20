import React, { Component } from 'react'
import styled from 'styled-components'
import { get } from '../../service/api'

class OrderProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            product: {}
        }
    }


    async componentDidMount() {
        const id = this.props.id
        const resp = await get(`/product/${id}`)
        const product = resp.data

        this.setState({product})
    }


    render() {
        const {product} = this.state
        const {count} = this.props
        const {title, price} = product
        const totalPrice = (count * price).toFixed(2)

        return (
            <div>
                {product && (
                    <div>
                        <p>{title} (${price}) x {count} / {totalPrice}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default OrderProduct