import React from "react";
import CheckoutLayout from "../components/Ui/Checkout";
import Loading from "../components/Loading/Loading";

export default function Checkout() {
  return (
    <>
      <Loading show={true} />
      <CheckoutLayout />;
    </>
  );
}
