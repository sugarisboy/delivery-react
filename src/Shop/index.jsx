import React from 'react'
import './style.css'

export default class Shop extends React.Component {

    constructor(props) {
        super(props)

        this.info = props.hasOwnProperty('info') && props.info
        console.log(this.info)
    }

    render() {
        return (
            <div className="shop">
                <div className="shop__logo"/>
                <div className="shop__info-block">
                    <div className="shop__name">
                        {this.info.name}
                    </div>
                    <div className="shop__description">
                        {this.info.description}
                    </div>
                </div>
            </div>
        )
    }

}