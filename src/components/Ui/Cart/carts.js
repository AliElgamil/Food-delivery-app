import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
import { toggleCartVisible } from "../../../store/UiVisible";
import CartItem from "./CartItem";
import NoCartItem from "./NoCartItem";

export default function Carts() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cartItems);
  const { cartVisible } = useSelector((state) => state.uiVisible);
  const { lang } = useSelector((state) => state.lang);
  const [showCart, setShowCart] = useState(false);

  const toggleCartVisibleHandler = () => {
    setShowCart(false);
    setTimeout(() => {
      dispatch(toggleCartVisible());
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => setShowCart(true), 100);
  }, [cartVisible]);

  return (
    <div
      className="cart_container position-fixed"
      onClick={toggleCartVisibleHandler}
    >
      <ListGroup
        className={`cart ${showCart ? "show_cart" : ""} ${
          lang === "en" ? "" : "lang_ar"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="cart_close">
          <span onClick={toggleCartVisibleHandler}>
            <i className="ri-close-line"></i>
          </span>
        </div>

        <div className="cart_item-list">
          {!cartItems.length ? (
            <NoCartItem />
          ) : (
            cartItems.map((cartItem) => (
              <CartItem item={cartItem} key={cartItem.id} />
            ))
          )}
        </div>

        <div className="cart_bottom d-flex align-items-center justify-content-between w-100">
          <h6>
            <span>${totalPrice}</span>
          </h6>
          <button
            className={!cartItems.length ? "disabled" : ""}
            onClick={toggleCartVisibleHandler}
          >
            <Link to="/checkout">{lang === "en" ? "Checkout" : "الدفع"}</Link>
          </button>
        </div>
      </ListGroup>
    </div>
  );
}
