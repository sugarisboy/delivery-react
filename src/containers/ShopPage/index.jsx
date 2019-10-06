import React from 'react'
import ItemsList from '../ItemsList'
import { get } from '../../service/api'

export default class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shopId: props.match && props.match.params.id
        }
    }

    async componentDidMount() {
        const response = await get('/product/page', {
            shopId: this.state.shopId
        })
        this.setState({
            products: response.data.products
        })
    }

    render() {
        return (
            <ItemsList items={this.state.products}/>
        )
    }

}