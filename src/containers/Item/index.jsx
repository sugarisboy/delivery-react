import React from 'react'
import './style.scss'
import {addItem, removeItem} from '../../actions/cart'
import {API_URL} from '../../service/api'
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.info = props.info
    }

    addItem(shopId, id, count) {
        this.props.addItem(shopId, id, count)
        this.setState({
            count: (this.state.count + 1)
        })
    }

    removeItem(shopId, id) {
        this.props.removeItem(shopId, id)
        this.setState({
            count: (this.state.count - 1)
        })
    }

    render() {
        const {
            title, price, id, shopId, description
        } = this.info

        //const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        return (
            <div style={{minWidth: '100px', width: '250px', margin: 'auto', padding: '8px'}}>
                <div style={{height: '280px'}}>
                    <img
                        src={`${API_URL}/img/product/${id}.jpg`}
                        style={{
                            maxWidth: '240px',
                            maxHeight: '240px',
                            minWidth: '0px',
                            minHeight: '0px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div>
                    <h2 style={{
                        textAlign: 'center',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical'

                    }}>
                        {title}
                    </h2>

                </div>
                {/*<div style={{
                    //width: '240px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical',
                    color: 'darkgray',
                    height: '56px',
                    textAlign: 'center'
                }}>
                    {description}
                </div>*/}
                <div style={{display: 'flex', flexDirection: "row", marginTop: '20px'}}>
                    <div style={{display: "block"}}>

                        <h2 style={{marginTop: '8px'}}>${price.toFixed(2)}</h2>

                    </div>
                    <div style={{display: 'block', marginLeft: 'auto'}}>
                        {this.state.count == 0 ?
                            <Button variant="outlined"
                                    style={{borderRadius: '50px', minWidth: '120px', margin: '4px 13px'}}
                                    onClick={() => this.addItem(shopId, id)}>
                                Buy
                            </Button>
                            :
                            <ButtonGroup size="small" aria-label="small outlined button group"
                                         style={{
                                             position: 'relative',
                                             minWidth: '120px',
                                             width: 'auto',
                                             borderRadius: '50px'
                                         }}
                            >
                                <Button
                                    style={{
                                        left: '12px',
                                        zIndex: '0',
                                        margin: 'auto',
                                        height: '36px',
                                        maxHeight: '36px',
                                        paddingLeft: '0',
                                        borderRadius: '50px 0 0 50px',
                                        minWidth: '54px',
                                        marginLeft: 'none'
                                    }}
                                    onClick={() => this.removeItem(shopId, id)}
                                >
                                    -
                                </Button>
                                <div style={{
                                    border: '1px solid gray',
                                    borderRadius: '50px',
                                    zIndex: '10',
                                    background: '#f11e20',
                                    height: '44px',
                                    width: '44px',
                                    textAlign: 'center',
                                }}>
                                    <div style={{margin: '13px', color: "#fff"}}>
                                        {this.state.count}
                                    </div>
                                </div>
                                <Button
                                    style={{
                                        right: '12px',
                                        zIndex: '0',
                                        margin: 'auto',
                                        height: '36px',
                                        maxHeight: '36px',
                                        paddingRight: '0',
                                        borderRadius: '0 50px 50px 0',
                                        minWidth: '54px'
                                    }}
                                    onClick={() => this.addItem(shopId, id)}
                                >
                                    +
                                </Button>
                            </ButtonGroup>
                        }
                    </div>
                </div>
            </div>


        )
    }

}


const mapDispatchToProps = {
    addItem, removeItem
}

export default connect(null, mapDispatchToProps)(Item)