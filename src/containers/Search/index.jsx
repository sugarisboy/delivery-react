import React from 'react'
import AsyncSelect from 'react-select/async'
import { get } from '../../service/api'
import { connect } from 'react-redux'
import { setAddress } from '../../actions/user'
import styled from 'styled-components'
import { CSS_MOBILE } from '../../utils'

const SearchBlock = styled.div`
    display: flex;
    flex-wrap: nowrap;
    
    @media (${CSS_MOBILE}) {
        width: 100%;
        flex: 0 0 auto;
        flex-direction: column;
        align-items: center;
    }
`

const Input = styled(AsyncSelect)`
    width: 500px;

    border: none;
    padding: 0;
    color: #393939;
    font-size: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    font-weight: 400;

    outline: none;
    
    &::placeholder {
        color: #595959;
    }
    
    @media (${CSS_MOBILE}) {
        width: 100%;
    }
    
`

const SearchButton = styled.button`
    width: 110px;
    border: none;
    padding: 12px;
    appearance: none;
    
    background-color: #4685df;
    color: #fff;
    font-size: 15px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    
    @media (${CSS_MOBILE}) {
        margin-top: 15px;
        border-radius: 15px;
    }
`

class Search extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            currentValue: '',
            label: '',
            address: {}
        }

        this.acReady = true
        this.acTimer = 0
    }

    onChange = ({value}) => {
        const {address, label} = value

        if (label && value) {
            this.setState({
                label,
                address
            })
        }
    }

    onInputChange(val, { action }) {
    }

    onSearchClick = () => {
        const {label, address} = this.state
        if (!address || Object.keys(address).length === 0) {
            alert('Please enter your address')
            return
        }

        const { city, district, street, houseNumber } = address
        if (!city || !district || !street || !houseNumber) {
            alert('Please select valid address')
            return
        }

        this.props.setAddress({label, address})
    }

    loadOptions = async (val) => {
        if (val.length < 1 || val.length > 100) {
            this.acReady = false
        }

        if (this.acReady) {
            const res = await get(`/map/ac/${val}`)
            const { suggestions } = res.data

            this.acReady = false

            return suggestions.map(s => ({
                label: s.label,
                value: s,
            }))
        } else {
            clearTimeout(this.acTimer)
            this.acTimer = setTimeout(async () => {
                this.acReady = true
            }, 0)
        }
    }

    render() {
        const {address, label} = this.state
        const currentValue = (label.length > 0 && Object.keys(address).length > 0)
            ? this.state
            : this.props.location

        return (
            <SearchBlock>
                <Input cacheOptions={true}
                       className="search__input"
                       placeholder="Add your address"
                       value={currentValue}
                       loadOptions={this.loadOptions}
                       onInputChange={this.onInputChange}
                       onChange={this.onChange}
                       styles={{
                           control: styles => ({
                               ...styles,
                               padding: 12,
                           }),
                           dropdownIndicator: () => ({
                               display: 'none',
                           }),
                           input: styles => ({
                               ...styles,
                           }),
                           indicatorsContainer: () => ({
                               display: 'none',
                           }),
                       }}
                />

                <SearchButton className="search__button"
                              onClick={this.onSearchClick}
                >
                    Search
                </SearchButton>
            </SearchBlock>
        )
    }

}

const mapStateToProps = state => ({
    location: state.user.location
})

const mapDispatchToProps = {
    setAddress
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)