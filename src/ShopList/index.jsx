import React from 'react'
import axios from 'axios'
import Shop from '../Shop'
import './style.css'

export default class ShopList extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            shops: []
        }
    }

    async componentDidMount() {
        let response = await axios.get('http://localhost:8080/shop/')
        if (response.hasOwnProperty('data')) {
            this.setState({shops: response.data})
        }
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