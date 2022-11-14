import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import Loading from "../Loading/Loading";

const text = {
  des: `Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque qui, voluptas et sit delectus possimus maxime hic
                  repudiandae corrupti temporibus accusantium sequi,`,
  desAr: `هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ `,
  title: {
    t1: "Delivery Time",
    t2: "Contact",
    t3: "Newsletter",
  },
  titleAr: {
    t1: "وقت التوصيل",
    t2: "تواصل معنا",
    t3: " اخر اخبارنا",
  },
  week: {
    sun: "Sunday",
    thur: "Thursday",
    fri: "Friday",
    sat: "saturday",
    dayOf: "Day of",
  },
  weekAr: {
    sun: "الاحد",
    thur: "الخميس",
    fri: "الجمعة",
    sat: "السبت",
    dayOf: "يوم عطلة",
  },

  location: "Location: Gotham, wellStreet-21540, zackSnyder",
  locationAr: "العنوان: جوثام, وال استريت-21540, ذاك سنيدار",
  phone: "Phone: 011354734431",
  phoneAr: "الموبيل: 011354734431",
  email: "Email: host@gmail.com",
  emailAr: "ايميل: host@gmail.com",
  newsletter: "Subscribe our newsletter",
  newsletterAr: "تابع اخر اخبارنا",
};
export default function Footer() {
  const { lang } = useSelector((state) => state.lang);
  return (
    <>
      <Loading show={true} />
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className="footer_logo  d-flex justify-content-start flex-column">
                <img src={logo} alt="logo" />
                <h5>tasty treat</h5>
                <p>{lang === "en" ? text.des : text.desAr}</p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">
                {lang === "en" ? text.title.t1 : text.titleAr.t1}
              </h5>
              <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>
                    {lang === "en" ? text.week.sun : text.weekAr.sun} -{" "}
                    {lang === "en" ? text.week.thur : text.weekAr.thur}
                  </span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>
                    {lang === "en" ? text.week.fri : text.weekAr.fri} -
                    {lang === "en" ? text.week.sat : text.weekAr.sat}
                  </span>
                  <p>{lang === "en" ? text.week.dayOf : text.weekAr.dayOf}</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">
                {lang === "en" ? text.title.t2 : text.titleAr.t2}
              </h5>
              <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>{lang === "en" ? text.location : text.locationAr}</span>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>{lang === "en" ? text.phone : text.phoneAr}</span>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>{lang === "en" ? text.email : text.emailAr}</span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">
                {" "}
                {lang === "en" ? text.title.t3 : text.titleAr.t3}
              </h5>
              <p>{lang === "en" ? text.newsletter : text.newsletterAr}</p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder={
                    lang === "eng"
                      ? "Enter your email"
                      : "ادخل الايميل الخاص بك"
                  }
                />
                <button>
                  <i className="ri-send-plane-fill"></i>
                </button>
              </form>
            </Col>
          </Row>

          <Row className="mt-5">
            <Col md="6">
              <p className="copyright_text">
                &copy;Copyright - 2022, website made by Muhibuer Rahman, All
                Rights Reserved.
              </p>
            </Col>
            <Col md="6">
              <div className="social_links d-flex align-items-center gap-4 justify-content-end">
                <span className="d-flex gap-2">
                  <Link to="/error404">
                    <i className="ri-facebook-fill"></i>
                  </Link>
                  <Link to="/error404">
                    <i className="ri-twitter-fill"></i>
                  </Link>
                  <Link to="/error404">
                    <i className="ri-instagram-fill"></i>
                  </Link>
                  <Link to="/error404">
                    <i className="ri-linkedin-fill"></i>
                  </Link>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
