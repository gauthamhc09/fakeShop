import { Col, Row } from "antd";
import React from "react";
import { useGetProductsQuery } from "../../services/api/api";
import CardComponent from "../common/CardComponent";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  return (
    <div className="products-container">
      {isLoading && <h2>Loading....</h2>}
      {!isLoading &&  <>
      <h1>Products</h1>
      <div className="products" style={{ overflow: "hidden" }}>
        <Row gutter={[16, 24]}>
          {data?.map((item) => {
            return (
              <Col sm={12} lg={8} key={item.id}>
                <CardComponent {...item} />
              </Col>
            );
          })}
        </Row>
      </div>
      </>}
    </div>
  );
};

export default Products;
