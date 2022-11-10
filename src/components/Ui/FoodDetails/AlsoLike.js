import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import ProductCards from "../ProductCards/ProductCards";

export default function AlsoLike() {
  const { alsoLike } = useSelector((state) => state.allFood);

  return (
    <div className="also_like">
      <h2 className="my-3">You might also like</h2>

      <Row className="gap_row">
        {alsoLike.map((item) => (
          <Col key={item?.id} xl="3" lg="4" md="6">
            <ProductCards item={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
