import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../../Helmet/Helmet";
import CommonSection from "../CommonSection/CommonSection";
import "../../../styles/checkout.css";
import toast from "react-hot-toast";
export default function CheckoutLayout() {
  const { totalPrice } = useSelector((state) => state.cartItems);
  const texShopping = 30;
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const option = {
      duration: 4000,
      className: "toast_success",
      position: "top-right",
    };
    toast.success("Thank you for using this app ❤️❤️", option);
  };
  return (
    <Helmet title="checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col md="8">
              <form
                className="form d-flex flex-column gap-3"
                onSubmit={formSubmitHandler}
              >
                <h3>Shopping Address</h3>
                <div className="input">
                  <input
                    type="text"
                    placeholder="Enter Your name"
                    autoComplete="off"
                  />
                  <span></span>
                </div>
                <div className="input">
                  <input
                    type="email"
                    placeholder="Enter Your email"
                    autoComplete="off"
                  />
                  <span></span>
                </div>
                <div className="input">
                  <input
                    type="tel"
                    placeholder="Phone number"
                    autoComplete="off"
                  />
                  <span></span>
                </div>
                <div className="input">
                  <input type="text" placeholder="Country" autoComplete="off" />
                  <span></span>
                </div>
                <div className="input">
                  <input type="text" placeholder="City" autoComplete="off" />
                  <span></span>
                </div>
                <div className="input">
                  <input
                    type="tel"
                    placeholder="Postal code"
                    autoComplete="off"
                  />
                  <span></span>
                </div>
                <button className="form_submit add-to-cart">
                  Finish shopping
                </button>
              </form>
            </Col>

            <Col md="4">
              <div className="payment_info mt-3 mt-md-0">
                <p className="d-flex justify-content-between m-0">
                  subtotal: <span>${totalPrice}</span>
                </p>
                <p className="d-flex justify-content-between m-0">
                  shopping: <span>${texShopping}</span>
                </p>

                <h4 className="d-flex justify-content-between my-4 ">
                  Total: <span>${totalPrice + texShopping}</span>
                </h4>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}
