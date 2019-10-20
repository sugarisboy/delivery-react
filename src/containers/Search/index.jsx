import React from 'react'
import AsyncSelect from 'react-select/async'
import './style.scss'
import { get } from '../../service/api'
import { connect } from 'react-redux'
import { setAddress } from '../../actions/user'

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            suggestions: []
        }
    }

    async onChange(val) {
        // const res = await get(`/map/ac/${value}`)
        // const {suggestions} = res.data
        //
        // this.setState({
        //     suggestions: suggestions.filter(s => (s.address.street && s.address.houseNumber))
        // })
    }

    loadOptions = async(val) => {
        const res = await get(`/map/ac/${val}`)
        const {suggestions} = res.data
        const filtered = suggestions.filter(s => (s.address.street && s.address.houseNumber))
        return suggestions.map(s => ({label: s.label}))
    }

    render() {
        return (
            <div className="search">
                <AsyncSelect type="text"
                             cacheOptions
                             className="search__input"
                             placeholder="Add your address"
                             loadOptions={this.loadOptions}
                             onInputChange={this.onChange.bind(this)}
                             styles={{
                                 control: styles => ({
                                     ...styles,
                                     padding: 12
                                 }),
                                 dropdownIndicator: () => ({
                                     display: 'none'
                                 }),
                                 input: styles => ({
                                     ...styles
                                 }),
                                 indicatorsContainer: () => ({
                                     display: 'none'
                                 })
                             }}
                />

                <button className="search__button">Search</button>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    setAddress: address => dispatch(setAddress(address))
})

export default connect(null, mapDispatchToProps)(Search)