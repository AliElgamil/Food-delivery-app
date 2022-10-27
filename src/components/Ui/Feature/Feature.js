import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeatureImg1 from "../../../assets/images/service-01.png";
import FeatureImg2 from "../../../assets/images/service-02.png";
import FeatureImg3 from "../../../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    urlImg: FeatureImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa? ",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
  {
    title: "Super Dine In",
    urlImg: FeatureImg2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa?",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
  {
    title: "Easy Pick up",
    urlImg: FeatureImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa?",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
];
export default function Feature() {
  return (
    <Container>
      <Row>
        <Col className="text-center" sm="12">
          <h5 className="feature_subtitle mb-4">What we serve</h5>
          <h2 className="feature_title">Just sit back at home</h2>
          <h2 className="feature_title">
            we will <span>take care</span>
          </h2>
          <p className="mt-4 mb-1 feature_text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odit
            inventore alias corporis tempore!
          </p>
          <p className="feature_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            officiis
          </p>
        </Col>
        {featureData.map((item, ind) => (
          <Col md="6" lg="4" key={ind} className="mt-5">
            <div className="feature_item text-center px-3">
              <img src={item.urlImg} alt="feature img" className="w-25 mb-3" />
              <h5 className="mb-3 fw-bold">{item.title}</h5>
              <p>{item.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
