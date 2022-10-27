import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AllFoodsLayout from "../components/Ui/AllFoods";
import CommonSection from "../components/Ui/CommonSection/CommonSection";
import Loading from "../components/Loading/Loading";
export default function AllFoods() {
  return (
    <>
      <Loading show={true} />
      <Helmet title={"All-Foods"}>
        <CommonSection title={"All Foods"} />
        <AllFoodsLayout />
      </Helmet>
    </>
  );
}
