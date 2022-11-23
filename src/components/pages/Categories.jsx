import { Button, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsFetch, putCategoryNameOnGlobal } from "../../services/features/asyncthunk/productSlice";
import { addToCart } from "../../services/features/cartSlice";
import CardComponent from "./../common/CardComponent";

const { Text, Title } = Typography;

const Categories = ({ setGolobalState }) => {
  const [productsAvailable, setProductsAvailable] = useState(false);

  const { items } = useSelector(state => state.categories)
  const { products } = useSelector(state => state.products)

  const dispatch = useDispatch();

  const categoryStyle = {
    margin: "16px",
    textTransform: "capitalize",
  };

  const changeProductsAvailable = () => {
    setProductsAvailable(!productsAvailable);
  };
  const callCategoryProducts = (categoryName) => {
    dispatch(putCategoryNameOnGlobal(categoryName))
    dispatch(productsFetch(categoryName))
  };
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="products-container">
      <>
        {items?.map((categoryItem, index) => {
          return (
            <Button
              key={index}
              style={categoryStyle}
              onClick={() => callCategoryProducts(categoryItem)}
            >
              {categoryItem}
            </Button>
          );
        })}
        <Title level={4}>
          Click the product category you would like to shop for!
        </Title>
      </>

      {
        <div className="products" style={{ overflow: "hidden" }}>
          <Row gutter={[16, 24]}>
            {products?.map((product) => {
              return (
                <Col sm={12} lg={8} key={product.id}>
                  <CardComponent
                    product={product}
                    addToCart={handleAddToCart}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      }
    </div>
  );
};

export default Categories;
