import SuccessMessage from "./SuccessMessage";
import CartItem from "./CartItem";

function Cart() {
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
						
						<CartItem/>
					</tbody>
					<tfoot id="my-cart-footer">
						
						<tr><th colspan="6">Empty product in your cart</th></tr>
						<tr>
							<td colspan="4">There are <b>5</b> items in your shopping cart.</td>
							<td colspan="2" className="total-price text-left">12 USD</td>
						</tr>
					</tfoot>
				</table>

			</div>
		</div>
		<SuccessMessage/>
	</div>
  );
}

export default Cart;