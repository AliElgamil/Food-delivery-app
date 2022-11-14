import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImage from "../../../assets/images/hero.png";

const text = {
  subTitle: "Easy way to make an order",
  subTitleAr: "اسهل طريقة للطلب",
  title: {
    text1: "HUNGRY?",
    text2: "Just wait food at",
    text3: "your door",
  },
  titleAr: {
    text1: "جائع؟",
    text2: "انتظر طعامك ",
    text3: "عند بابك",
  },
  para: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
              quibusdam repellat cum maiores vero rerum, iure inventore deserunt`,
  paraAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.`,
  button: {
    btn1: "Order now",
    btn2: "See all foods",
  },
  buttonAr: {
    btn1: "اطلب الان",
    btn2: "شاهد كل الاطعمة",
  },
  service: {
    ser1: "No shipping charge",
    ser2: "100% secure checkout",
  },
  serviceAr: {
    ser1: "لا توجد رسوم شحن",
    ser2: "100% الدفع الآمن",
  },
};

export default function HeroSection() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Container>
      <Row>
        <Col md="6">
          <div className="hero_content">
            <h5 className="mb-3">
              {lang === "en" ? text.subTitle : text.subTitleAr}
            </h5>
            <h1
              className="mb-4 hero_title"
              style={{ maxWidth: lang === "en" ? "400px" : "350px" }}
            >
              <span>
                {lang === "en" ? text.title.text1 : text.titleAr.text1}
              </span>
              {lang === "en" ? text.title.text2 : text.titleAr.text2}
              <span>
                {lang === "en" ? text.title.text3 : text.titleAr.text3}
              </span>
            </h1>
            <p>{lang === "en" ? text.para : text.paraAr}</p>
            <div className="hero_buttons d-flex align-items-center gap-5 mt-4">
              <button className="order_button d-flex align-items-center justify-content-between">
                {lang === "en" ? text.button.btn1 : text.buttonAr.btn1}
                <i
                  className={`${
                    lang === "en"
                      ? "ri-arrow-right-s-line"
                      : "ri-arrow-left-s-line"
                  }`}
                ></i>
              </button>
              <Link to="/all-foods" className="all_foods-btn">
                {lang === "en" ? text.button.btn2 : text.buttonAr.btn2}
              </Link>
            </div>

            <div className="hero_service d-flex align-items-center gap-5 mt-5">
              <p
                className="d-flex align-items-center gap-2"
                style={{ flexDirection: lang === "en" ? "row" : "row-reverse" }}
              >
                {lang === "en" ? text.service.ser1 : text.serviceAr.ser1}
                <span className="shipping_icon">
                  <i className="ri-car-line"></i>
                </span>
              </p>
              <p
                className="d-flex align-items-center gap-2"
                style={{ flexDirection: lang === "en" ? "row" : "row-reverse" }}
              >
                {lang === "en" ? text.service.ser2 : text.serviceAr.ser2}
                <span className="shipping_icon">
                  <i className="ri-shield-check-line"></i>
                </span>
              </p>
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="hero_image">
            <img
              src={heroImage}
              alt="hero"
              className="img-fluid"
              style={{
                transform: lang === "en" ? "rotateY(0)" : "rotateY(180deg)",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
