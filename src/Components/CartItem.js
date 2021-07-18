import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateCart, actDeleteCartItem} from "./../Action/actionType";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.item.quantity,
      total: 0
    }
  }

  handleChange = (e) => {
    let updatedQuantity = +e.target.value;
    let {item} = this.props;
    // if (updatedQuantity === 0){
    //   this.props.deleteCart(item.id);
    // } else {
      this.setState({
        quantity: updatedQuantity,
        total: item.productPrice * (updatedQuantity)
      });
      this.props.updateCart(item.id, updatedQuantity);
    // }    
  }

  static getDerivedStateFromProps(props, state) {

    console.log(props.item);
    console.log(state);
    return {
      quantity: props.item.quantity,
      total: props.item.quantity * props.item.productPrice
    };
  }

  handleUpdateCart = (id, quantity) => {
    console.log("handleUpdateCart");
    this.props.updateCart(id, quantity);
  }

  handleDeleteItem = (id) => {
    console.log("handleDeleteItem");
    this.props.deleteCart(id);
  }

  render() {
    let {item, index} = this.props;

    let {quantity, total} = this.state;
    console.log("quantity from state :", this.state.quantity);
    console.log("quantity from props :", item.quantity);
    console.log("total from state: ", this.state.total);
    console.log("total from props: ", item.productPrice * item.quantity);
    quantity = (quantity===0) ? item.quantity : quantity;
    total = (total===0) ? (item.productPrice * item.quantity) : total;
		
    return (
      <tr>
        <th scope="row">{index}</th>
        <td>{item.productName}</td>
        <td>{item.productPrice} USD</td>
        <td><input onChange={this.handleChange} name="cart-item-quantity-1" type="number" value={quantity} min="1" /></td>
        <td><strong>{total} USD</strong></td>
        <td>
          <button onClick={() => this.handleUpdateCart(item.id, quantity)} className="label label-info update-cart-item" data-product="">Update</button>
          <button onClick={() => this.handleDeleteItem(item.id)} className="label label-danger delete-cart-item" data-product="">Delete</button>
        </td>
      </tr>
    );
	}

  
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateCart: (id, quantity) => {
      dispatch(actUpdateCart(id, quantity));
    },

    deleteCart: (id) => {
      dispatch(actDeleteCartItem(id));
    }
  }
}
export default connect(null, mapDispatchToProps)(CartItem);