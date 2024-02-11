import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
    const {amount}= useSelector((store)=>store.cart)

  return (
    <nav
      style={{
        backgroundColor: "#40A2D8",
        height: "min-content",
        paddingTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "30px",
          color: "white",
        }}
      >
        <h3>redux toolkit</h3>
        <div>
          <p>{amount}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
