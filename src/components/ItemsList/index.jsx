import React from 'react'
import Item from '../Item'
import './style.scss'

export default class ItemsList extends React.Component {

    render() {
        return (
            <main className="items-list">
                {this.props.items && this.props.items.map(item => (
                    <Item key={item.id} info={item}/>
                ))}
            </main>
        )
    }

}