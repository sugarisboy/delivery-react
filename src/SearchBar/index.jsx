import React from 'react';
import Search from '../Search';
import './style.css';

export default class SearchBar extends React.Component {

    render() {
        return (
            <div className="search-bar">
                <Search/>
            </div>
        )
    }

}