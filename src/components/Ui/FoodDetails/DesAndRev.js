import React from "react";
import { Col } from "reactstrap";

export default function DesAndRev({ foodItem }) {
  return (
    <>
      <Col sm="12">
        <div className="tabs d-flex gap-5 py-3 align-items-center mt-5">
          <button className="btn tab-btn fw-bold tab_active">
            Description
          </button>
          <button className="btn tab-btn fw-bold">Reviews</button>
        </div>

        <div className="tab_content">
          <p>{foodItem?.desc}</p>
        </div>
      </Col>
    </>
  );
}
