import React from 'react'
import './style.css'
import {connect} from 'react-redux'
import {store} from '../../store'
import {ADD_ITEM} from '../../actions'

class CartButton extends React.Component {

    constructor(props) {
        super(props)

        store.subscribe(() => {
            console.log(store.getState())
        })
    }

    onClick() {
        this.props.dispatch({
            type: ADD_ITEM,
            payload: {
                count: 1
            }
        })
    }


    render() {
        return (
            <button className="header-cart">
                <div className="header-cart__counter" onClick={() => this.onClick()}>
                    {this.props.count}
                </div>
            </button>
        )
    }

}

function mapStateToProps(state) {
    console.log('mapStateToProps', state)

    return {
        count: state.items
    }
}

export default connect(mapStateToProps)(CartButton)