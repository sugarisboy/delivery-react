import React from 'react';
import './style.css'

export default class Logo extends React.Component {
    render() {
        return (
            <button className="logo" onClick={this.redirectToHome}/>
        )
    }

    redirectToHome() {
        window.location.href = '/';
    }

}