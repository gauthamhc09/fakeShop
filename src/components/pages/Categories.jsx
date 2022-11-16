import { Button, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetCategoriesQuery,
  useGetProductsOnCategoryQuery
} from "../../services/api/api";
import { addToCart } from "../../services/features/cartSlice";
import CardComponent from "./../common/CardComponent";

const { Text, Title } = Typography;

const Categories = () => {
  const [productsAvailable, setProductsAvailable] = useState(false);
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  
  const categoryStyle = {
    margin: "16px",
    textTransform: "capitalize",
  };

  const {
    data: categories,
    isLoading: isLoadingCategory,
    refetch: refetchCategory,
  } = useGetCategoriesQuery();
  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
  } = useGetProductsOnCategoryQuery(category);

  const changeProductsAvailable = () => {
    setProductsAvailable(!productsAvailable);
  };

  const callCategoryProducts = (categoryName) => {
    setCategory(categoryName);
    refetchProducts();
    changeProductsAvailable();
  };

  const handleRefreshCategory = () => {
    refetchCategory();
    setProductsAvailable(!productsAvailable);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="products-container">
      {isLoadingCategory && <Title level={2}>Loading...</Title>}
      {!isLoadingCategory && !productsAvailable && (
        <>
          {categories?.map((category, index) => {
            return (
              <Button
                key={index}
                style={categoryStyle}
                onClick={() => callCategoryProducts(category)}
              >
                {category}
              </Button>
            );
          })}
          <Title level={4}>
            Click the product category you would like to shop for!
          </Title>
        </>
      )}
      {productsAvailable && (
        <div className="products" style={{ overflow: "hidden" }}>
          <div className="products__subheader">
            <Title level={3} style={{ margin: 0 }}>
              {category.toUpperCase()}
            </Title>
            <Text
              type="danger"
              onClick={handleRefreshCategory}
              style={{ cursor: "pointer" }}
            >
              Back...
            </Text>
          </div>

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
      )}
    </div>
  );
};

export default Categories;
