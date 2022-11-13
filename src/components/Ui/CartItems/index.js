import React from "react";
import { useSelector } from "react-redux";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
import ImageLoading from "../../ImageLoading";
import "../../../styles/cart-items.css";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  deCreaseItem,
  inCreaseItem,
  removeItem,
} from "../../../store/cartItems";
export default function CartItems() {
  const dispatch = useDispatch();
  const { cartItems, totalPrice } = useSelector((state) => state.cartItems);

  const deleteItem = (i) => {
    dispatch(removeItem(i));
  };
  const inCrease = (i) => dispatch(inCreaseItem(i));
  const deCrease = (i) => dispatch(deCreaseItem(i));

  return (
    <Helmet title=" cart">
      <CommonSection title="Your cart" />
      <Container>
        {!cartItems.length ? (
          <div className="cart_empty d-flex align-items-center justify-content-center">
            <lottie-player
              src="https://assets7.lottiefiles.com/packages/lf20_qh5z2fdq.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
            <div className="d-flex align-items-center gap-2">
              <p className="m-0">Your cart is empty 😑😡</p>
              <Link to="/all-foods" className="btn_to">
                Go to Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="bill-container d-flex flex-column gap-4">
            {cartItems.map((item) => (
              <div
                className="bill_item d-flex align-items-center justify-content-between pb-2"
                key={item.id}
              >
                <div className="item_info d-flex align-items-center gap-3">
                  <div className="bill_item-img">
                    <ImageLoading src={item.image} alt={item.category} />
                  </div>
                  <div className="item_content">
                    <h6>{item.name}</h6>
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        {item.quantity}x {item.price}$
                      </span>
                      <div class="d-flex align-items-center justify-content-between  gap-3 inc_dec-btn">
                        <span class="inc-btn" onClick={() => inCrease(item.id)}>
                          <i class="ri-add-line"></i>
                        </span>
                        <span class="quantity">1</span>
                        <span class="dec-btn" onClick={() => deCrease(item.id)}>
                          <i class="ri-subtract-line"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="item_total-price">${item.totalPrice}</div>
                  <button
                    className="btn px-0 item_delete"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="ri-delete-bin-5-line"></i>
                  </button>
                </div>
              </div>
            ))}

            <div className="bill_item d-flex align-items-center justify-content-between">
              <p className="m-0 d-flex gap-1 info_price">
                <i className="ri-information-fill"></i>Taxes and shipping will
                calculate at checkout
              </p>
              <span className="total_price">${totalPrice}</span>
            </div>

            <div className="btn_container d-flex justify-content-start gap-3">
              <Link to="/checkout">Checkout</Link>
              <Link to="/all-foods">Continue Shopping</Link>
            </div>
          </div>
        )}
      </Container>
    </Helmet>
  );
}
