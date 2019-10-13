import React from 'react'
import './style.css'
import { get } from '../../service/api'

export default class Search extends React.Component {

    async onChange(e) {
        const {value} = e.target
        const res = await get(`/map/ac/${value}`)
        const suggestions = res.data
        console.log(suggestions)
    }

    render() {
        return (
            <div className="search">
                <input type="text"
                       className="search__input"
                       placeholder="Add your address"
                       onChange={this.onChange}
                />

                <button className="search__button">Search</button>
            </div>
        )
    }

}