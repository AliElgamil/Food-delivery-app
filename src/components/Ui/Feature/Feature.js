import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import FeatureImg1 from "../../../assets/images/service-01.png";
import FeatureImg2 from "../../../assets/images/service-02.png";
import FeatureImg3 from "../../../assets/images/service-03.png";

const featureData = [
  {
    title: "Quick Delivery",
    titleAr: "توصيل سريع",
    urlImg: FeatureImg1,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa? ",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
  {
    title: "Super Dine In",
    titleAr: "سرعة الاعداد",
    urlImg: FeatureImg2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa?",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
  {
    title: "Easy Pick up",
    titleAr: "سهولة الاستلام",
    urlImg: FeatureImg3,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque vel est laborum obcaecati sunt qui sequi molestias consequuntur culpa?",
    descriptionAr:
      "هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ",
  },
];

const text = {
  subTitle: "What we serve",
  subTitleAr: "ما الذي نخدمك به",
  featureTitle: {
    title1: "Just sit back at homeJust sit back at home",
    title2: {
      t1: "we will",
      t2: "take care",
    },
  },
  featureTitleAr: {
    title1: "اجلس في المنزل فقط",
    title2: {
      t1: "نحن سوف ",
      t2: "نعتني بكل شئ",
    },
  },

  featureText: {
    text1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi odit
    inventore alias corporis tempore!`,
    text2: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
    officiis`,
  },

  featureTextAr: {
    text1: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز`,
    text2: `على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها.`,
  },
};
export default function Feature() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Container>
      <Row>
        <Col className="text-center" sm="12">
          <h5 className="feature_subtitle mb-4">
            {lang === "en" ? text.subTitle : text.subTitleAr}
          </h5>
          <h2 className="feature_title">
            {lang === "en"
              ? text.featureTitle.title1
              : text.featureTitleAr.title1}
          </h2>
          <h2 className="feature_title">
            {lang === "en"
              ? text.featureTitle.title2.t1
              : text.featureTitleAr.title2.t1}
            <span>
              {lang === "en"
                ? text.featureTitle.title2.t2
                : text.featureTitleAr.title2.t2}
            </span>
          </h2>
          <p className="mt-4 mb-1 feature_text">
            {lang === "en" ? text.featureText.text1 : text.featureTextAr.text1}
          </p>
          <p className="feature_text">
            {lang === "en" ? text.featureText.text2 : text.featureTextAr.text2}
          </p>
        </Col>
        {featureData.map((item, ind) => (
          <Col md="6" lg="4" key={ind} className="mt-5">
            <div className="feature_item text-center px-3">
              <img src={item.urlImg} alt="feature img" className="w-25 mb-3" />
              <h5 className="mb-3 fw-bold">
                {lang === "en" ? item.title : item.titleAr}
              </h5>
              <p>{lang === "en" ? item.description : item.descriptionAr}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
