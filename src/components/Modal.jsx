import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../fratures/cart/cartSlice";
import { closeModal } from "../fratures/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <div style={modalContainer}>
      <div>
        <h4 style={{ marginBottom: "90px" }}>
          Remove all items from your shopping cart
        </h4>
        <div style={buttonContainer}>
          <button
            style={{
              border: "2px solid red",
              padding: "5px 10px",
              background: "white",
            }}
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            style={{
              border: "2px solid green",
              padding: "5px 10px",
              background: "white",
            }}
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const modalContainer = {
  position: "absolute",
  top: "50%",
  right: "50%",
  backgroundColor: "white",
  maxWidth: "400px",
  height: "250px",
  borderRadius: "5px",
  border: "1px solid gray",
  padding: "10px",
  margin: "10px",
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "500px",
  // Add other styles based on your needs
};

const buttonContainer = {
  display: "flex",
  justifyContent: "space-evenly",
};

export default Modal;
