import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReviewItems from "../ReviewItems/ReviewItems";
import Cart from "./../Cart/Cart";
import "./Orders.css";
const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter(product => product.id !== id);
    setCart(remaining);
  }

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItems
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItems>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
