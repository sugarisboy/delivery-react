import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { API_URL } from '../../service/api'

export default class Shop extends React.Component {

    constructor(props) {
        super(props)
        this.info = props.info
    }

    render() {
        const { id } = this.info

        return (
            <Link to={`/shop/${id}`} className="shop">
                <div className="shop__logo" style={{
                    background: `url(${API_URL}/img/shop/${id}.jpg) #000`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}/>
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