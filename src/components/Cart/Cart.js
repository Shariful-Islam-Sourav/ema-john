import React from "react";
import "./Cart.css";

const Cart = (prop) => {
  const { cart } = prop;
  //item total price
  let itemtotalPrice = 0;
  for (const product of cart) {
    itemtotalPrice += product.price;
  }
  //total shipping Cost
  let shippingCost = itemtotalPrice * 0.05;
  if (shippingCost >= 100) {
    shippingCost = 100;
  }
  //Total Without Tax
  let totalWithoutTax = itemtotalPrice + shippingCost;
  //Estimated Tax Amount
  let estimatedTax = itemtotalPrice * 0.1;
  //Grand/Order Total
  let orderTotal = totalWithoutTax + estimatedTax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Total Items: {cart.length}</h4>
      <div className="price-area">
        <p>Items Price: ${itemtotalPrice.toFixed(2)}</p>
        <hr />
        <p>Shipping Handling: ${shippingCost.toFixed(2)}</p>
        <hr />
        <p>Total before tax: ${totalWithoutTax.toFixed(2)}</p>
        <hr />
        <p>Estimated Tax: ${estimatedTax.toFixed(2)}</p>
        <hr />
        <h4 className="red-text">Order Total: ${orderTotal.toFixed(2)}</h4>
      </div>
      <button>Review Your Order</button>
    </div>
  );
};

export default Cart;
