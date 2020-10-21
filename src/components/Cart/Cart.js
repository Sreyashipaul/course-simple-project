import React from 'react';
import './Cart.css';


const Cart = (props) => {
    let cart = props.cart;
  let total = cart.reduce((total, prd) => total + prd.price, 0);
  let coupon = total / 10;
  let totalBeforeTax = total - coupon;
  let tax = totalBeforeTax / 20;
  let grandTotal = totalBeforeTax + tax;
  //Function to format number
  function numFormat(num) {
    let precision = num.toFixed(2);
    return Number(precision);
  }
  
  
    return (
        <div className="cart">
      <h1>
       Order Summery
      </h1>
      <h3>Course Ordered: {cart.length}</h3>
    
      <h3>Price: ${numFormat(total)}</h3>
      
      <h5>
        Tax (10%): <span className="text-danger"> ${numFormat(tax)}</span>
      </h5>
      <br/>
      <button type="button" className="button">
        Buy now {" "}
        <span className="badge badge-light">$ {numFormat(grandTotal)}</span>
      </button>
    </div>
    );
};

export default Cart;