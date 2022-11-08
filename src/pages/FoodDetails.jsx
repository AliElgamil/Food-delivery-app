import React from "react";
import Loading from "../components/Loading/Loading";
import FoodDetailsLayout from "../components/Ui/FoodDetails";

export default function FoodDetails() {
  return (
    <>
      <Loading show={true} />
      <FoodDetailsLayout />
    </>
  );
}
