import React from 'react'
import Shop from '../Shop'
import './style.css'
import { post } from '../../service/api'
import { connect } from 'react-redux'

class ShopList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shops: []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const prevAddress = prevProps.address.label
        const address = this.props.address.label

        if (address !== prevAddress) {
            this.updatePage()
        }
    }

    async updatePage() {
        console.log('update')

        let response = await post('/shop/page?page=0&size=30', {
            deliveryFor: this.props.address.label
        })
        if (response.hasOwnProperty('data')) {
            this.setState({shops: response.data.shops})
        }
    }

    async componentDidMount() {
        this.updatePage()
    }

    render() {
        return (
            <main className="shop-list">
                {this.state.shops.map(shop => (
                    <Shop key={shop.id} info={shop}/>
                ))}
            </main>
        )
    }

}

const mapStateToProps = state => ({
    address: state.user.location
})

export default connect(mapStateToProps)(ShopList)