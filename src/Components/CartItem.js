import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateCart, actDeleteCartItem, actChangeMessage} from "./../Action/actions";
import * as configMessage from './../const/messages';
import Helper from "../libs/Helper";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    }
  }

  handleChange = (e) => {
    this.setState({
      quantity: +e.target.value
    });
  }

  handleUpdateCart = (product, quantity) => {
    this.props.updateCart(product, quantity);
  }

  handleDeleteItem = (product) => {
    this.props.deleteCart(product);
  }

  render() {
    let {item, index} = this.props;
    let {product} = item;
    
    let quantity = (this.state.quantity !== 0) ? this.state.quantity : item.quantity;
  
		
    return (
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{product.productName}</td>
        <td>{Helper.toCurrency(product.price, "USD", "right")}</td>
        <td><input onChange={this.handleChange} name="cart-item-quantity-1" type="number" value={quantity} min={1} /></td>
        <td><strong>{this.showSubTotal(product.price, quantity)}</strong></td>
        <td>
          <button onClick={() => this.handleUpdateCart(product, quantity)} className="label label-info update-cart-item" data-product="">Update</button>
          <button onClick={() => this.handleDeleteItem(product)} className="label label-danger delete-cart-item" data-product="">Delete</button>
        </td>
      </tr>
    );
	}

  showSubTotal = (price, quantity) => {
    return Helper.toCurrency(price * quantity, "USD", "right");
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCart: (product, quantity) => {
      dispatch(actUpdateCart(product, quantity));
      dispatch(actChangeMessage(configMessage.MSG_ACT_UPDATE));
    },

    deleteCart: (product) => {
      dispatch(actDeleteCartItem(product));
      dispatch(actChangeMessage(configMessage.MSG_ACT_DELETE));
    }
  }
}
export default connect(null, mapDispatchToProps)(CartItem);