import React from "react";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartItems";
import "../../../styles/product-card.css";

export default function ProductCards({ item }) {
  const dispatch = useDispatch();
  const [loadingImage, setLoadingImage] = useState(true);

  const addItemToCart = () =>
    dispatch(
      addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        image01: item.image01,
      })
    );
  return (
    <div className="product_item text-center">
      <div className={`product_img ${loadingImage ? "loading" : ""}`}>
        <LazyLoadImage
          alt={item.category}
          src={item.image01}
          afterLoad={() => setLoadingImage(false)}
          effect="blur"
          className="img-fluid  mb-4"
        />
      </div>

      <div className="product_content">
        <h5 className="product_name mb-5">
          <Link to={`/foods/${item.id}`}>{item.title}</Link>
        </h5>
        <div className="d-flex align-items-center justify-content-between">
          <span className="product_price">${item.price}</span>
          <button className="add-to-cart rounded-3" onClick={addItemToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
