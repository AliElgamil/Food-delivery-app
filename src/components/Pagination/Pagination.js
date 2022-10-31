import React from "react";
import { Col, Row } from "reactstrap";
import ProductCards from "../Ui/ProductCards/ProductCards";
import "./style.css";

export default function Pagination({ items, pageNumber, setPageNumber }) {
  const sliceFoodCard = (data) => {
    const pageView = 8;
    const items = [...data];
    const newData = [];
    for (let i = 0; i < Math.ceil(data.length / pageView); i++) {
      const sliceData = items.splice(0, pageView);
      newData.push(sliceData);
    }

    return newData;
  };

  const products = sliceFoodCard(items);
  const nextPage = () => setPageNumber(pageNumber + 1);
  const prePage = () => setPageNumber(pageNumber - 1);
  const pageNumberHandler = (pageNumber) => setPageNumber(pageNumber);

  const start = () => {
    const startNumber = pageNumber - 1;
    if (pageNumber === 1) return 1;
    else if (pageNumber === products.length) return startNumber - 1;
    return startNumber;
  };

  const end = () => {
    const endNumber = pageNumber + 1;
    if (pageNumber - 1 === 0) return pageNumber + 2;
    return endNumber;
  };

  return (
    <div className="products_section">
      <Row>
        {!items.length ? (
          <div className="not_results d-flex justify-content-center align-items-center flex-column py-5 w-100">
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_mk6o3c37.json"
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "300px" }}
              loop
              autoplay
            ></lottie-player>
            <h4>No food Founded! 🥲</h4>
          </div>
        ) : (
          products[pageNumber - 1].map((product) => (
            <Col xl="3" lg="4" md="6" key={product.id} className="mt-4">
              <ProductCards item={product} />
            </Col>
          ))
        )}

        <Col sm="12" className="mt-5">
          {
            <ul className="pagination_numbers list-unstyled">
              {pageNumber !== 1 && items.length !== 0 ? (
                <li onClick={prePage}>prev</li>
              ) : (
                <li className="hide_btn" onClick={prePage}>
                  prev
                </li>
              )}

              {products.map(
                (_, ind) =>
                  ind + 1 >= start() && ind + 1 <= end() ? (
                    pageNumber === ind + 1 ? (
                      <li
                        key={ind}
                        onClick={() => pageNumberHandler(ind + 1)}
                        className="active"
                      >
                        {ind + 1}
                      </li>
                    ) : (
                      <li key={ind} onClick={() => pageNumberHandler(ind + 1)}>
                        {ind + 1}
                      </li>
                      // PagNumbers?.map((item) => item)
                    )
                  ) : null
                // null
              )}
              {pageNumber === products.length || !items.length ? (
                <li className="hide_btn" onClick={nextPage}>
                  next
                </li>
              ) : (
                <li onClick={nextPage}>next</li>
              )}
            </ul>
          }
        </Col>
      </Row>
    </div>
  );
}
