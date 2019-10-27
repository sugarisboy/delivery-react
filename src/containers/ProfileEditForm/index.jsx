import React, { Component } from 'react'
import styled from 'styled-components'
import QwikInput from '../../components/QwikInput'
import { connect } from 'react-redux'
import { get, patch } from '../../service/api'

const EditBlock = styled.div`
   margin-left: auto;
   width: 400px;
`

class ProfileEditForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userData: {
                name: '',
                email: '',
                password: '',
                phone: '',
                repeatPassword: '',
            },
        }
    }

    componentDidMount() {
        this.updateData()
    }

    async updateData() {
        const { id } = this.props.auth.userData
        try {
            const resp = await get(`/user/${id}`)
            if (resp.status === 200) {
                const { name, email, phone } = resp.data
                this.setState(state => ({
                    userData: {
                        ...state.userData,
                        name,
                        email,
                        phone,
                    },
                }))
            }
        } catch (e) {

        }
    }

    onSubmit = async e => {
        const { id } = this.props.auth.userData
        const { name, email, phone } = this.state.userData

        e.preventDefault()

        try {
            const resp = await patch('/user/update', {
                email,
                id,
                name,
                phone,
            })

            if (resp.data.id) {
                alert('OK!')
            }
        } catch (e) {
            console.error(e)
            alert(e.data.response)
        }

        this.updateData()
    }

    onChange = e => {
        const { name, value } = e.target
        const newUserData = this.state.userData

        newUserData[name] = value
        this.setState({
            userData: newUserData,
        })
    }

    render() {
        const { name, email, phone, password, repeatPassword } = this.state.userData
        console.log(name)

        return (
            <EditBlock>
                <h2>Edit profile</h2>
                <form onSubmit={this.onSubmit} autoComplete="off">
                    <QwikInput
                        name="name"
                        title="Full Name"
                        type="text"
                        onChange={this.onChange}
                        value={name}
                    />
                    <QwikInput
                        name="email"
                        title="Email"
                        type="text"
                        onChange={this.onChange}
                        value={email}
                    />
                    <QwikInput
                        name="phone"
                        title="Phone"
                        type="text"
                        onChange={this.onChange}
                        value={phone}
                    />
                    <QwikInput
                        name="password"
                        title="Password"
                        type="password"
                        onChange={this.onChange}
                        value={password}
                    />
                    <QwikInput
                        name="repeatPassword"
                        title="Repeat passowrd"
                        type="password"
                        onChange={this.onChange}
                        value={repeatPassword}
                    />
                    <button type="submit" className="button">Update</button>
                </form>
            </EditBlock>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditForm)