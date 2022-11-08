import React from "react";
import { useState } from "react";
import { Col } from "reactstrap";
import Comments from "./Comments/Comments";
import Form from "./Form/Form";

export default function DesAndRev({ foodItem }) {
  const [tabDisplay, setTabDisplay] = useState(false);

  const desHandler = () => setTabDisplay(false);
  const revHandler = () => setTabDisplay(true);

  return (
    <>
      <Col sm="12">
        <div className="tabs d-flex gap-5 py-3 align-items-center mt-5">
          <button
            className={`btn tab-btn fw-bold ${!tabDisplay ? "tab_active" : ""}`}
            onClick={desHandler}
          >
            Description
          </button>
          <button
            className={`btn tab-btn fw-bold ${tabDisplay ? "tab_active" : ""}`}
            onClick={revHandler}
          >
            Reviews
          </button>
        </div>

        <div className={`tab_content ${tabDisplay ? "d-none" : ""}`}>
          <p>{foodItem?.desc}</p>
        </div>

        <div
          className={`tab_content ${
            !tabDisplay ? "d-none" : ""
          } d-flex flex-column gap-3`}
        >
          {foodItem?.reviews === undefined ? (
            <div className="no_reviews d-flex align-items-center g-3 justify-content-center flex-wrap">
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_zbakob77.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
              <h4 className="m-0">No reviews until now be the first 👍✍️</h4>
            </div>
          ) : (
            foodItem?.reviews.map((item, ind) => (
              <Comments comments={item} key={ind} />
            ))
          )}
          <Form item={foodItem} />
        </div>
      </Col>
    </>
  );
}
