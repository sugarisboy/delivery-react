import React from 'react'
import './style.css'
import {Link} from "react-router-dom"

export default class Logo extends React.Component {

    render() {
        return (
            <Link to="/" className="logo"/>
        )
    }

}