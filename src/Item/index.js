import React from 'react'
import './style.scss'

export default class Item extends React.Component {

    constructor(props) {
        super(props)

        this.info = props.hasOwnProperty('info') && props.info
        console.log(this.info)
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
                        <button className="item-actions__button increase-item">+</button>
                        <button className="item-actions__button decrease-item">-</button>
                    </div>
                </div>
            </div>
        )
    }

}