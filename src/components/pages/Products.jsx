import { Card } from "antd";
import React from "react";
import { useGetPrizesQuery } from "../../store/features/productsSlice";
import CardComponent from "../common/CardComponent";
import { Col, Row } from "antd";

const Products = () => {
  const { data } = useGetPrizesQuery();
  return (
    <div className="products-container">
      <h1>Products</h1>
      {/* <div className="products">
        {data?.map((item) => {
          return <CardComponent {...item} />;
        })}
      </div> */}
      <div className="products">
        <Row>
          {data?.map((item) => {
            return (
              <Col span={12}>
                <CardComponent {...item} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Products;
