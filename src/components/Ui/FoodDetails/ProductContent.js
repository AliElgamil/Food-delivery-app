import React from "react";
import { useDispatch } from "react-redux";
import { Col } from "reactstrap";
import { addToCart } from "../../../store/cartItems";

export default function ProductContent({ foodItem }) {
  const dispatch = useDispatch();
  const addItemToCart = () =>
    dispatch(
      addToCart({
        id: foodItem.id,
        name: foodItem.title,
        price: foodItem.price,
        image01: foodItem.image01,
      })
    );
  return (
    <>
      <Col md="6">
        <div className="single_product-content d-flex flex-column">
          <h2 className="product-title">{foodItem?.title}</h2>
          <span className="product-price">${foodItem?.price}</span>
          <h5 className="product-category">
            <span>{foodItem?.category}</span>
          </h5>
          <button className="add-to-cart mt-4" onClick={addItemToCart}>
            Add to Cart
          </button>
        </div>
      </Col>
    </>
  );
}
