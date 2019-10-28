import React from 'react'
import Search from '../../containers/Search'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'
import img from './search.jpg'

const Bar = styled.div`
    width: 100%;
    height: 313px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-image: linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    margin-top: 15px;
    
    @media (${CSS_MOBILE}) {
        height: 200px;
        justify-content: flex-start;
        padding: 10px;
        
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;        
    }
`

export default class SearchBar extends React.PureComponent {

    render() {
        return (
            <Bar>
                <Search/>
            </Bar>
        )
    }

}