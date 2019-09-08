import React from 'react'
import './style.css'

export default class Search extends React.Component {

    render() {
        return (
            <div className="search">
                <input type="text"
                       className="search__input"
                       placeholder="Add your address"/>

                <button className="search__button">Search</button>
            </div>
        )
    }

}