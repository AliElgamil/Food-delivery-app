import React from "react";
import { Col, Container, Row } from "reactstrap";
import networkImage from "../../../assets/images/network.png";
import TestiSlider from "../Slider/TestiSlider/TestiSlider";
export default function Testimonial() {
  return (
    <Container>
      <Row>
        <Col lg="6">
          <div className="testimonial mb-5">
            <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
            <h2 className="testimonial_title mb-4">
              What our <span>customers</span> are saying
            </h2>
            <p className="testimonial_des">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
              sunt officiis ipsam repudiandae esse suscipit praesentium ea nihil
              eum recusandae iusto sit exercitationem aperiam magnam explicabo,
              consectetur itaque voluptatem eligendi.
            </p>

            <div className="slider">
              <TestiSlider />
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
