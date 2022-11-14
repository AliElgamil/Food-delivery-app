import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import networkImage from "../../../assets/images/network.png";
import TestiSlider from "../Slider/TestiSlider/TestiSlider";

const text = {
  subtitle: "Testimonial",
  subtitleAr: "توصيات",
  title: {
    t1: "What our",
    t2: "customers",
    t3: "are saying",
  },
  titleAr: {
    t1: "ما رائي ",
    t2: "عملائنا",
    t3: "بنا ",
  },
  des: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              sunt officiis ipsam repudiandae esse suscipit praesentium ea nihil
              eum recusandae iusto sit exercitationem aperiam magnam explicabo,
              consectetur itaque voluptatem eligendi.`,
  desAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ`,
};

export default function Testimonial() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Container>
      <Row>
        <Col lg="6">
          <div className="testimonial mb-5">
            <h5 className="testimonial_subtitle mb-4">
              {lang === "en" ? text.subtitle : text.subtitleAr}
            </h5>
            <h2 className="testimonial_title mb-4">
              {lang === "en" ? text.title.t1 : text.titleAr.t1}
              <span>
                {lang === "en" ? text.title.t2 : text.titleAr.t2}
              </span>{" "}
              {lang === "en" ? text.title.t3 : text.titleAr.t3}
            </h2>
            <p className="testimonial_des">
              {lang === "en" ? text.des : text.desAr}
            </p>

            <div className="slider">
              <TestiSlider lang={lang} />
            </div>
          </div>
        </Col>
        <Col lg="6">
          <img src={networkImage} alt="testimonial" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
}
