import React from "react";
import { useDispatch } from "react-redux";
import {
  clearCart,
  decrease,
  increase,
  removeItem,
} from "../fratures/cart/cartSlice";

const cartItemStyle = {
  padding: "10px",
  margin: "10px",
  display: "flex",
  justifyContent: "space-between",
  width: "500px",
  // Add other styles based on your needs
};

const imageStyle = {
  width: "100px",
};
const productContainer = {
  display: "flex",
  gap: "20px",
  justifyContent: "space-evenly",
};

const btnStyle = {
  border: "none",
  backgroundColor: "#D04848",
  padding: "3px 4px",
  borderRadius: "5px",
  color: "white",
};

const priceContainer = {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
  height: "30px",
};

const pricebtnStyle = {
  border: "none",
  backgroundColor: "#D04848",
  padding: "3px 8px",
  borderRadius: "5px",
  color: "white",
};

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article style={cartItemStyle}>
      <div style={productContainer}>
        <img src={img} alt="" style={imageStyle} />
        <div>
          <h4>{title}</h4>
          <h4> ₹ {price}</h4>
          <button style={btnStyle} onClick={() => dispatch(removeItem(id))}>
            remove
          </button>
        </div>
      </div>
      <div style={priceContainer}>
        <button
          style={pricebtnStyle}
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          +
        </button>
        <p style={{ margin: "5px" }}>{amount}</p>
        <button
          style={pricebtnStyle}
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          -
        </button>
      </div>
    </article>
  );
};

export default CartItem;
