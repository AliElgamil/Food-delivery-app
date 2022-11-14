import React from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { ListGroupItem } from "reactstrap";
import {
  deCreaseItem,
  inCreaseItem,
  removeItem,
} from "../../../store/cartItems";
import "../../../styles/cart-shopping.css";

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.lang);
  const removeItemFromCart = () => {
    dispatch(removeItem(item.id));
    const option = {
      duration: 4000,
      className: "toast_error",
      position: "top-right",
    };
    toast.error(
      lang === "en" ? "Remove item from cart done🥲" : "تم ازاله بنجاح🥲",
      option
    );
  };
  return (
    <ListGroupItem className=" cart_item">
      <div className="cart_item-info d-flex gap-3">
        <div className="image">
          <img src={item.image} alt={item.name} className="img-fluid" />
        </div>
        <div className="cart_product-info d-flex gap-5 align-items-center justify-content-between w-100">
          <div>
            <h6 className="cart_product-name">
              {lang === "en" ? item.name : item.nameAr}
            </h6>
            <p className="d-flex align-align-items-center gap-5 cart_product-price">
              <span>
                <b>{item.quantity}</b>x ${item.price}
              </span>{" "}
              <span>${item.totalPrice}</span>
            </p>
            <div className="d-flex align-items-center justify-content-between  gap-3 inc_dec-btn">
              <span
                className="inc-btn"
                onClick={() => dispatch(inCreaseItem(item.id))}
              >
                <i className="ri-add-line"></i>
              </span>
              <span className="quantity">{item.quantity}</span>
              <span className="dec-btn">
                <i
                  className="ri-subtract-line"
                  onClick={() => dispatch(deCreaseItem(item.id))}
                ></i>
              </span>
            </div>
          </div>
          <button className="delete_btn" onClick={() => removeItemFromCart()}>
            <i className="ri-delete-bin-5-line"></i>
          </button>
        </div>
      </div>
    </ListGroupItem>
  );
}
