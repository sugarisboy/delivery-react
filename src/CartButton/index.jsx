import React from 'react'
import './style.css'

export default class CartButton extends React.Component {

    constructor(props) {
        super(props)
        this.counter = props.counter || 10
    }


    render() {
        return (
            <button className="header-cart">
                <div className="header-cart__counter">
                    {this.counter}
                </div>
            </button>
        )
    }

}