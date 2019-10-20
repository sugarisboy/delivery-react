import React, { Component } from 'react'
import styled from 'styled-components'
import ProfileEditForm from '../ProfileEditForm'
import OrderHistory from '../OrderHistory'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const ProfileBlock = styled.div`
    display:flex;
    width: 100%;
`

class ProfilePage extends Component {

    render() {
        return this.props.auth.isLoggedIn
            ? (
                <div>
                    <h1>Profile</h1>
                    <ProfileBlock>
                        <OrderHistory/>
                        <ProfileEditForm/>
                    </ProfileBlock>
                </div>
            )
            : (
                <div>
                    <Redirect to="/"/>
                </div>
            )

    }


}

const mapStateToProps = state => ({auth: state.auth})

export default connect(mapStateToProps)(ProfilePage)