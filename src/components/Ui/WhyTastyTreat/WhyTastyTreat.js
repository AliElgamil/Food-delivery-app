import React from "react";
import { useSelector } from "react-redux";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import whyImage from "../../../assets/images/location.png";

const list = [
  {
    content: "Fresh and tasty foods",
    contentAr: "الأطعمة الطازجة واللذيذة",
  },
  {
    content: "Quality support",
    contentAr: "دعم الجودة",
  },
  {
    content: "Order from any location",
    contentAr: "اطلب من أي مكان",
  },
];

const text = {
  title: {
    t1: "Why",
    t2: "Tasty Treat?",
  },
  titleAr: {
    t1: "لماذا ",
    t2: "Tasty Treat؟",
  },
  des: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              quibusdam ipsam est, molestias officia quod alias vel.
              Accusantium, eveniet! Ipsum dolor ipsam quis quas soluta
              praesentium ut reprehenderit eum. Consequatur.`,

  desAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ`,

  contentDes: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                    corporis rem cumque`,
  contentDesAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز`,
};

export default function WhyTastyTreat() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <Container>
      <Row>
        <Col lg="6">
          <img
            src={whyImage}
            alt="why-tasty"
            className="img-fluid"
            style={{
              transform: lang === "en" ? "rotateY(0)" : "rotateY(180deg)",
            }}
          />
        </Col>
        <Col lg="6">
          <div className="why_tasty-treat">
            <h2 className="tasty_treat-title mb-4">
              {lang === "en" ? text.title.t1 : text.titleAr.t1}
              <span>{lang === "en" ? text.title.t2 : text.titleAr.t2}</span>
            </h2>
            <p className="tasty_treat-des">
              {lang === "en" ? text.des : text.desAr}
            </p>
            <ListGroup className="mt-2">
              {list.map((listItem, ind) => (
                <ListGroupItem className="border-0 ps-0 " key={ind}>
                  <p className="choose_us-title d-flex align-items-center gap-2  ">
                    <i className="ri-checkbox-circle-line"></i>
                    {lang === "en" ? listItem.content : listItem.contentAr}
                  </p>
                  <p className="choose_us-des">
                    {lang === "en" ? text.contentDes : text.contentDesAr}
                  </p>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
