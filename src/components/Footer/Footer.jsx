import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import Loading from "../Loading/Loading";
export default function Footer() {
  return (
    <>
      <Loading show={true} />
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6">
              <div className="footer_logo text-start">
                <img src={logo} alt="logo" />
                <h5>tasty treat</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cumque qui, voluptas et sit delectus possimus maxime hic
                  repudiandae corrupti temporibus accusantium sequi,
                </p>
              </div>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">Delivery Time</h5>
              <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Sunday - Thursday</span>
                  <p>10:00am - 11:00pm</p>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Friday - saturday</span>
                  <p>off day</p>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">Contact</h5>
              <ListGroup className="delivery_time-list">
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Location: Gotham, wellStreet-21540, zackSnyder</span>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Phone: 011354734431</span>
                </ListGroupItem>
                <ListGroupItem className="delivery_time-item border-0 ps-0">
                  <span>Email: host@gmail.com</span>
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col lg="3" md="4" sm="6">
              <h5 className="delivery_title">Newsletter</h5>
              <p>Subscribe our newsletter</p>
              <form className="newsletter" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Enter your email" />
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
