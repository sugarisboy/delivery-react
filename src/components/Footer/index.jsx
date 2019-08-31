import React from 'react'
import Logo from '../Logo'
import FooterNav from '../FooterNav'
import './style.css'

export default class Footer extends React.Component {

    render() {
        return (
            <footer className="footer">
                <div className="wrapper footer__wrapper">
                    <Logo/>
                    <FooterNav/>
                </div >
            </footer>
        )
    }

}