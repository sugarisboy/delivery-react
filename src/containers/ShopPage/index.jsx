import React from 'react'
import ItemsList from '../ItemsList'
import axios from 'axios'

export default class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shopId: props.match && props.match.params.id
        }
    }

    async componentDidMount() {
        if (this.state.shopId) {
            const response = await axios.get(`http://localhost:8080/product/shop/${this.state.shopId}`)
            this.setState({
                products: response.data
            })
        }
    }

    render() {
        return (
            <ItemsList items={this.state.products}/>
        )
    }

}