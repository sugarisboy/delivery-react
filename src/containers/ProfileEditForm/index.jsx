import React, { Component } from 'react'
import styled from 'styled-components'
import QwikInput from '../../components/QwikInput'

const EditBlock = styled.div`
   margin-left: auto;
   width: 400px;
`

export default class ProfileEditForm extends Component {
    render() {
        return (
            <EditBlock>
                <h2>Edit profile</h2>
                <form>
                    <QwikInput name="email" title="Email" type="email"/>
                    <QwikInput name="firstName" title="First Name" type="text"/>
                    <QwikInput name="lastName" title="Last Name" type="text"/>
                    <QwikInput name="password" title="Password" type="password"/>
                    <QwikInput name="repeatPassword" title="Repeat passowrd" type="password"/>
                    <button type="submit" className="button">Update</button>
                </form>
            </EditBlock>
        )
    }
}