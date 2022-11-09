import React from "react";
import Loading from "../components/Loading/Loading";
import CartItems from "../components/Ui/CartItems";
export default function Cart() {
  return (
    <>
      <Loading show={true} />
      <CartItems />
    </>
  );
}
