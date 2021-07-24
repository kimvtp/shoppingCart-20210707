import React, { Component } from "react";
import { connect } from 'react-redux';

import { actAddToCart, actChangeMessage } from '../Action/actions';
import Helper from "./../libs/Helper";
import Validate from "./../libs/Validate";
import * as configMessage from './../const/messages';

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

    handleAddToCart = (product, quantity) => {
        if(Validate.checkQuantity(quantity)) {
            this.props.clickAddToCart(product, quantity);
            this.setState({quantity: 1});
            this.props.successMessage(configMessage.MSG_ACT_ADD);
        }
        
    }

  render() {
    let {product} = this.props;
    
		return (
            <div className="media product">
                <div className="media-left">
                    <a href="#">
                        <img className="media-object" src={`images/${product.image.src}`} alt={product.image.alt} />
                    </a>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{product.productName}</h4>
                    <p>{product.description}</p>
                    
                    {this.showBuyButton(product)}
                </div>
            </div>
        );
	}
    
    showBuyButton = (product) => {
        let price = Helper.toCurrency(product.price, "USD", "right");
        let xml = <span data-product="1" className="price disabled"> {price}</span>; 
        if (product.canBuy) {
            xml = <p>
                    <input onChange={this.handleChange} name="quantity-product-1" type="number" value={this.state.quantity} min="1" />
                    <button onClick={() => this.handleAddToCart(product, this.state.quantity)} data-product="1" className="price"> {price} </button>
                </p>; 
        }
        return xml;
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        clickAddToCart: (product, quantity) => {
            dispatch(actAddToCart(product, quantity));
            
        },

        successMessage: (message) => {
            dispatch(actChangeMessage(message));
        }
    }
}

export default connect(null, mapDispatchToProps ) (ProductItem);
