import React from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../fratures/cart/cartSlice";
import { openModal } from "../fratures/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  if (amount < 1) {
    return (
      <div style={{ margin: "auto", width: "1080px" }}>
        <header style={{ margin: "auto", width: "100%" }}>
          <h1>Your Bag</h1>
          <h4>is currently empty</h4>
        </header>
      </div>
    );
  }

  return (
    <div style={{ margin: "auto", width: "1080px" }}>
      <header style={{ margin: "auto", width: "100%" }}>
        <h1>Your Bag</h1>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer style={cartItemStyle}>
        <hr />
        <div>
          <h4>
            Total :
            <span style={{ paddingLeft: "300px" }}>₹ {total.toFixed(2)}</span>
          </h4>
        </div>
        <button style={buttonStyle} onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </div>
  );
};

const cartItemStyle = {
  padding: "10px",
  margin: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "500px",
  // Add other styles based on your needs
};

const buttonStyle = {
  width: "100px",
  border: "none",
  backgroundColor: "#176B87",
  color: "white",
  borderRadius: "5px",
  padding: "3px 4px",
};

export default CartContainer;
