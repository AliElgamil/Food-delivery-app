import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../../store/cartItems";
import "../../../styles/product-card.css";
import ImageLoading from "../../ImageLoading";

export default function ProductCards({ item }) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const option = {
      duration: 4000,
      className: "toast_success",
      position: "top-right",
    };
    dispatch(
      addToCart({
        id: item.id,
        name: item.title,
        price: item.price,
        image01: item.image01,
      })
    );
    toast.success("Add to cart done👍", option);
  };
  return (
    <div className="product_item text-center">
      <h5 className="product_name mb-5">
        <Link to={`/all-foods/${item.id}`}>
          <ImageLoading
            src={item.image01}
            alt={item.category}
            addClass={["mb-4"]}
          />
          {item.title}
        </Link>
      </h5>
      <div className="product_content">
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
