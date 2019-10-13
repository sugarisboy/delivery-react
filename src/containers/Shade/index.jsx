import React from 'react'
import './style.scss'
import {connect} from 'react-redux'
import { setShade } from '../../actions/application'

class Shade extends React.Component {

    componentDidMount() {
        document.addEventListener('keyup', e => {
            if (e.key === 'Escape') {
                this.props.setShade(false)
            }
        })
    }

    onClick(e) {
        if (e.target.className.indexOf('shade') > -1) {
            this.props.setShade(false)
        }
    }

    render() {
        return (
            <div className={"shade " + (this.props.isShaded ? "" : "hidden")}
                 onClick={this.onClick.bind(this)}
            >
                {this.props.children}
            </div>
        )
    }

}

const mapStateToProps = state => ({
    isShaded: state.application.isShaded
})

const mapDispatchToProps = dispatch => ({
    setShade: isShaded => dispatch(setShade(isShaded))
})

export default connect(mapStateToProps, mapDispatchToProps)(Shade)