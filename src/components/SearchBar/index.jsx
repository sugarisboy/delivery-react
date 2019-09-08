import React from 'react'
import Search from '../../containers/Search'
import './style.css'

export default class SearchBar extends React.PureComponent {

    render() {
        return (
            <div className="search-bar">
                <Search/>
            </div>
        )
    }

}