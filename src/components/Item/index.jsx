import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import {
    addItem, decreaseCart, increaseCart, removeItem
} from '../../actions/cart'

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.info = props.hasOwnProperty('info') && props.info
    }

    addItem() {
        this.props.dispatch(addItem(this.info.id, 1))
        this.props.dispatch(increaseCart(1))
    }

    removeItem() {
        this.props.dispatch(removeItem(1, 1))
        this.props.dispatch(decreaseCart(1))
    }

    render() {
        return (
            <div className="item">
                <div className="item__image"/>
                <div className="item__info-block">
                    <div className="item__title">
                        {this.info.title}
                    </div>
                    <div className="item__cost">
                        ${this.info.price}
                    </div>
                    <div className="item-actions">
                        <button className="item-actions__button increase-item"
                                onClick={() => this.addItem()}>
                            +
                        </button>
                        <button className="item-actions__button decrease-item"
                                onClick={() => this.removeItem()}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(Item)