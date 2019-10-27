import React from 'react'
import QwikInput from '../../components/QwikInput'
import QwikTextarea from '../../components/QwikTextarea'
import './style.scss'
import { connect } from 'react-redux'
import { get, post } from '../../service/api'
import { removeShop } from '../../actions/cart'
import { withRouter } from 'react-router-dom'

class OrderForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            userData: {
                name: '',
                phone: '',
                email: '',
                comment: ''
            }
        }
    }

    async componentDidMount() {
        const {id} = this.props.auth.userData
        if (!id) {
            return
        }

        try {
            const resp = await get(`/user/${id}`)
            const userData = resp.data
            this.setState({userData})
        } catch (e) {

        }
    }

    normalizeProducts(cart, shopId) {
        const shopCart = cart[shopId]
        const productsArray = []

        if (shopCart) {
            const keys = Object.keys(shopCart)

            if (keys.length > 0) {
                for (let key of keys) {
                    if (shopCart.hasOwnProperty(key)) {
                        const item = shopCart[key]
                        if (item.hasOwnProperty('count')) {
                            const count = item.count
                            if (count > 0) {
                                productsArray.push({
                                    productId: +key,
                                    count: count
                                })
                            }
                        }
                    }
                }
            }
        }

        return productsArray
    }

    onSubmit = async e => {
        const {
            shopId, auth, cart, history, removeShop,
        } = this.props

        e.preventDefault()

        const products = this.normalizeProducts(cart, shopId)

        try {
            const resp = await post('/order/create', {
                ...this.state.userData,
                products,
                shopId,
                userId: auth.userData.id || undefined,
            })

            if (resp.data.id) {
                alert('Thanks!')
                removeShop(shopId)
                history.push('/profile')
            }
        } catch (e) {
            console.log(e.response.data)
            alert('Error occurred')
        }
    }

    onChange = e => {
        const {name, value} = e.target
        const newUserData = this.state.userData

        newUserData[name] = value
        this.setState({
            userData: newUserData
        })
    }

    render() {
        const {user} = this.props
        const {userData} = this.state

        return (
            <div>
                <form className="order-form" onSubmit={this.onSubmit}>
                    <QwikInput name="address"
                               title="Address"
                               type="text"
                               defaultValue={user.location.label}
                               // required
                               onChange={this.onChange}/>
                    <QwikInput name="name"
                               title="Full Name"
                               type="text"
                               value={userData.name}
                               // required
                               onChange={this.onChange}/>
                    <QwikInput name="phone"
                               title="Phone"
                               type="tel"
                               value={userData.phone}
                               // required
                               onChange={this.onChange}/>
                    <QwikInput name="email"
                               title="Email"
                               type="email"
                               value={userData.email}
                               onChange={this.onChange}/>
                    <QwikTextarea name="comment" title="Comment" cols={30} rows={10} onChange={this.onChange}/>

                    <button type="submit" className="button">Next</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    auth: state.auth,
    cart: state.cart
})

const mapDispatchToProps = {
    removeShop,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderForm))