import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addFurniture } from "../../reduxtoolkit/furniture/furniture-slice";
import { removeFurniture } from "../../reduxtoolkit/furniture/furniture-slice";

import "./CartItems.scss";

import { GrClose } from "react-icons/gr";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartItems = () => {
  const dispatch = useDispatch();
  const { furnitureItems } = useSelector((store) => store.furniture);

  const totalPrice = furnitureItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const increamentNumber = (product) => {
    const newArr = furnitureItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );

    dispatch(addFurniture(newArr));
  };

  const decreamentNumber = (product) => {
    const newArr = furnitureItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );

    if (product.quantity < 2) {
      dispatch(removeFurniture(product.id));
    } else {
      dispatch(addFurniture(newArr));
    }
  };

  return (
    <div className="container">
      <div className="cart_items">
        <div className="cart_header">
          <div className="item_img">Image</div>
          <div className="item_detail">Details</div>
          <div className="item_number">Number</div>
        </div>
        <div className="cart_body">
          {furnitureItems.length < 1 ? (
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontWeight: 600,
                fontSize: "24px",
              }}
            >
              Your cart is currently empty!
            </div>
          ) : (
            furnitureItems.map((item, i) => (
              <div key={i} className="product_item">
                <div>
                  <img src={item.img} alt="product" width="80" />
                </div>
                <div>
                  <p>{item.title}</p>
                  <p style={{ fontWeight: 600 }}>${item.price}</p>
                </div>
                <div className="arrow_icons">
                  <FaMinus onClick={() => decreamentNumber(item)} />{" "}
                  <span style={{ margin: "0 10px" }}> {item.quantity} </span>{" "}
                  <FaPlus onClick={() => increamentNumber(item)} />
                </div>
                <div>
                  <div
                    className="clear_btn"
                    onClick={() => dispatch(removeFurniture(item.id))}
                  >
                    <GrClose />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="total_price">
          <h3>Total Price</h3>
          <h4>${totalPrice}</h4>
        </div>
        <div className="payment">
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
