import React, { Component } from "react";
import { connect } from 'react-redux';

import { actAddToCart, actShowMessage } from './../Action/actionType';
import Helper from "./../libs/Helper";

class ProductItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }
    handleChange = (event) => {
        this.setState({
            quantity: +event.target.value
        })
    }

    handleAddToCart = (id, name, price, quantity) => {
        this.props.clickAddToCart(id, name, price, quantity);
        console.log("handleAddToCart");
    }

  render() {
    let {item} = this.props;
    
		return (
            <div className="media product">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={`images/${item.image.src}`} alt={item.image.alt} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{item.productName}</h4>
                    <p>{item.description}</p>
                    
                    {this.showBuyButton(item)}
                </div>
            </div>
        );
	}
    
    showBuyButton = (item) => {
        let price = Helper.toCurrency(item.price, "USD", "right");
        let xml = <span data-product="1" className="price disabled"> {price}</span>; 
        if (item.canBuy) {
            xml = <p>
                    <input onChange={this.handleChange} name="quantity-product-1" type="number" value={this.state.quantity} min="1" />
                    <button onClick={() => this.handleAddToCart(item.id, item.productName, item.price, this.state.quantity)} data-product="1" className="price"> {price} </button>
                </p>; 
        }
        return xml;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickAddToCart: (id, name, price, quantity) => {
            dispatch(actAddToCart(id, name, price, quantity));
            dispatch(actShowMessage());
        }
    }
}

export default connect(null, mapDispatchToProps ) (ProductItem);
