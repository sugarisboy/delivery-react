import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

export default class Shop extends React.Component {

    constructor(props) {
        super(props)

        this.info = props.hasOwnProperty('info') && props.info
        console.log(this.info)
    }

    render() {
        return (
            <Link to={`/shop/${this.info.id}`} className="shop">
                <div className="shop__logo"/>
                <div className="shop__info-block">
                    <div className="shop__name">
                        {this.info.name}
                    </div>
                    <div className="shop__description">
                        {this.info.description}
                    </div>
                </div>
            </Link>
        )
    }

}