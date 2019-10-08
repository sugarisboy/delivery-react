import React from 'react'
import ItemsList from '../ItemsList'
import { get } from '../../service/api'
import { connect } from 'react-redux'
import { closeShop, openShop } from '../../actions/shop'

class ShopPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shopId: props.match && +props.match.params.id
        }
    }

    async componentDidMount() {
        const {shopId} = this.state
        const response = await get('/product/page', {
            shopId: shopId
        })
        this.setState({
            products: response.data.products
        })
        this.props.openShop(shopId)
    }

    componentWillUnmount() {
        this.props.closeShop()
    }

    render() {
        return (
            <ItemsList items={this.state.products}/>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    openShop: shopId => dispatch(openShop(shopId)),
    closeShop: () => dispatch(closeShop())
})

export default connect(null, mapDispatchToProps)(ShopPage)