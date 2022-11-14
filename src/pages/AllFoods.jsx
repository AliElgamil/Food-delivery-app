import React from "react";
import Helmet from "../components/Helmet/Helmet";
import AllFoodsLayout from "../components/Ui/AllFoods";
import CommonSection from "../components/Ui/CommonSection/CommonSection";
import Loading from "../components/Loading/Loading";
import { useSelector } from "react-redux";
export default function AllFoods() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <>
      <Loading show={true} />
      <Helmet title={lang === "en" ? "All-Foods" : "جميع الأطعمة"}>
        <CommonSection title={lang === "en" ? "All Foods" : "جميع الأطعمة"} />
        <AllFoodsLayout />
      </Helmet>
    </>
  );
}
