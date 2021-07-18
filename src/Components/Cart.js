import SuccessMessage from "./SuccessMessage";
import { connect} from "react-redux";
import React, { Component } from "react";

import CartItem from "./CartItem";

class Cart extends Component{

	render() {
		let {cartList, isShowMessage} = this.props;
	
		// Total value of cart
		let totalCart = 0;

		let list = cartList.map((item, index) => { 
			totalCart += (item.productPrice * item.quantity); 
			
			console.log(totalCart);
			
			return <CartItem key={item.id} index={index+1} item={item}></CartItem>
		});

		// Number of items in cart
		let totalItem = list.length;
		
		// Cart Summary
		let cartSummary = <tr><th colSpan="6">There is no product in your cart</th></tr>;
		if (totalItem !== 0) {
			cartSummary = <tr>
							<td colSpan="4">There are <b>{totalItem}</b> items in your shopping cart.</td>
							<td colSpan="2" className="total-price text-left">{totalCart} USD</td>
						</tr>;
		}

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-danger"> 
					<div className="panel-heading"><h1 className="panel-title">Your Cart</h1></div> 
					<div className="panel-body">
						<table className="table">
							<thead>
								<tr>
									<th width="4%">#</th>
									<th>Pokemon</th>
									<th width="15%">Price</th>
									<th width="4%">Quantity</th>
									<th width="20%">Subtotal</th>
									<th width="25%">Action</th>
								</tr>
							</thead>
							<tbody id="my-cart-body">
								
								{list}

							</tbody>
							<tfoot id="my-cart-footer">
								{cartSummary}
								
							</tfoot>
						</table>
		
					</div>
				</div>
					<SuccessMessage/>;
			</div>
		  );
	}
  
}

const mapStateToProps = state => {
	
	return {
		cartList: state.cartList,
		isShowMessage: state.isShowMessage
	}
  }
  
  export default connect(mapStateToProps, null ) (Cart);
