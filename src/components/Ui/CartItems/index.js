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
  const { lang } = useSelector((state) => state.lang);

  const deleteItem = (i) => {
    dispatch(removeItem(i));
  };
  const inCrease = (i) => dispatch(inCreaseItem(i));
  const deCrease = (i) => dispatch(deCreaseItem(i));

  return (
    <Helmet title={lang === "en" ? "cart" : "العربة"}>
      <CommonSection title={lang === "en" ? "Your cart" : "العربة"} />
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
              <p className="m-0">
                {lang === "en"
                  ? "Your cart is empty 😑😡"
                  : "العربة فارغة 😑😡"}
              </p>
              <Link to="/all-foods" className="btn_to">
                {lang === "en" ? "Go to Shopping" : "اذهب للتسوق"}
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
                    <h6>{lang === "en" ? item.name : item.nameAr}</h6>
                    <div className="d-flex align-items-center gap-3">
                      <span>
                        {item.quantity}x {item.price}$
                      </span>
                      <div className="d-flex align-items-center justify-content-between  gap-3 inc_dec-btn">
                        <span
                          className="inc-btn"
                          onClick={() => inCrease(item.id)}
                        >
                          <i className="ri-add-line"></i>
                        </span>
                        <span className="quantity">1</span>
                        <span
                          className="dec-btn"
                          onClick={() => deCrease(item.id)}
                        >
                          <i className="ri-subtract-line"></i>
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
                <i className="ri-information-fill"></i>
                {lang === "en"
                  ? "Taxes and shipping will calculate at checkout"
                  : "الضرايب و مصاريف الشحن تضاف عند الدفع"}
              </p>
              <span className="total_price">${totalPrice}</span>
            </div>

            <div className="btn_container d-flex justify-content-start gap-3">
              <Link to="/checkout">{lang === "en" ? "Checkout" : "الدفع"}</Link>
              <Link to="/all-foods">
                {lang === "en" ? "Continue Shopping" : "تابع التسوق"}
              </Link>
            </div>
          </div>
        )}
      </Container>
    </Helmet>
  );
}
