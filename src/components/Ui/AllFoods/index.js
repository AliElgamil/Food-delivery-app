import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getAllFood } from "../../../store/allFood";
import Search from "./Search";
import Sort from "./Sort";
import "../../../styles/all-food.css";
import Pagination from "../../Pagination/Pagination";

export default function AllFoodsLayout() {
  const dispatch = useDispatch();
  const { allProducts, searchProducts } = useSelector((state) => state.allFood);

  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setProducts(allProducts);
  }, [allProducts]);

  useEffect(() => {
    dispatch(getAllFood());
  }, [dispatch]);

  return (
    <section>
      <Container>
        <Row>
          <Col sm="6">
            <Search setPageNumber={setPageNumber} />
          </Col>
          <Col sm="6">
            <Sort />
          </Col>
        </Row>
        {/* searchProducts || products */}
        {/* [
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
            ...products,
          ] */}
        <Pagination
          items={searchProducts || products}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Container>
    </section>
  );
}
