import React from 'react'
import './style.scss'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../actions/cart'

class Item extends React.Component {

    constructor(props) {
        super(props)

        this.info = props.hasOwnProperty('info') && props.info
    }

    addItem(id) {
        this.props.addItem(id)
    }

    removeItem(id) {
        this.props.removeItem(id)
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
                                onClick={() => this.addItem(this.info.id)}>
                            +
                        </button>
                        <button className="item-actions__button decrease-item"
                                onClick={() => this.removeItem(this.info.id)}>
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