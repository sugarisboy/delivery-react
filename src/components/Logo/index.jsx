import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import img from './small-logo.png'

const StyledLink = styled(Link)`
    background-image: url(${img});
    background-color: transparent;
    background-repeat: no-repeat;
    width: 133px;
    height: 28px;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    
    border: none;
    
    &:hover {
        cursor: pointer;
    }
`

export default class Logo extends React.PureComponent {
    render() {
        return (
            <StyledLink to="/"/>
        )
    }
}