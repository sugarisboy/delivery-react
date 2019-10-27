import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../actions/cart'
import { API_URL } from '../../service/api'

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.info = props.info
    }

    addItem(shopId, id, count) {
        this.props.addItem(shopId, id, count)
    }

    removeItem(shopId, id) {
        this.props.removeItem(shopId, id)
    }

    render() {
        const {
            title, price, id, shopId
        } = this.info

        return (
            <div className="item">
                <div className="item__image" style={{
                    background: `url(${API_URL}/img/product/${id}.jpg) #000`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}/>
                <div className="item__info-block">
                    <div className="item__title">
                        {title}
                    </div>
                    <div className="item__cost">
                        ${price}
                    </div>
                    <div className="item-actions">
                        <button className="item-actions__button increase-item"
                                onClick={() => this.addItem(shopId, id)}>
                            +
                        </button>
                        <button className="item-actions__button decrease-item"
                                onClick={() => this.removeItem(shopId, id)}>
                            -
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = {
    addItem, removeItem
}

export default connect(null, mapDispatchToProps)(Item)