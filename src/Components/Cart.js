import ShowMessage from "./ShowMessage";
import { connect} from "react-redux";
import React, { Component } from "react";

import CartItem from "./CartItem";

class Cart extends Component{

	render() {
		let {cartList} = this.props;
	
		let list = cartList.map((item, index) => { 
			return <CartItem key={index + "-" + item.quantity} index={index} item={item}></CartItem>
		});
		
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
								{this.cartSummary(cartList)}
								
							</tfoot>
						</table>
		
					</div>
				</div>
					<ShowMessage/>;
			</div>
		  );
	}

	cartSummary = (list) => {
		let summary = <tr><th colSpan="6">There is no product in your cart</th></tr>;
		if (list.length !== 0) {
			let totalCart = 0;
			let totalItem = 0;

			list.map((item) => { 
				totalCart += (item.product.price * item.quantity); 
				totalItem += item.quantity;
			});

			summary = <tr>
						<td colSpan="4">There are <b>{totalItem}</b> items in your shopping cart.</td>
						<td colSpan="2" className="total-price text-left">{totalCart} USD</td>
					</tr>;
		}

		return summary;
	}
  
}

const mapStateToProps = state => {
	
	return {
		cartList: state.cartList
	}
  }
  
  export default connect(mapStateToProps, null ) (Cart);
