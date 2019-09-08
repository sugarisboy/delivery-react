import React from 'react'
import './style.scss'
import {connect} from 'react-redux'

class Shade extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: true
        }
    }

    render() {
        return (
            <div className={"shade " + (this.props.shade ? "" : "hidden")}>
                {this.props.children}
            </div>
        )
    }

}

function mapStateToProps(store) {
    return {
        shade: store.application.shade
    }
}

export default connect(mapStateToProps)(Shade)