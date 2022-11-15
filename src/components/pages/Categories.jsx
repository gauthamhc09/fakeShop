import { Button, Col, Row, Typography } from "antd";
import React, { useState } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsOnCategoryQuery,
} from "../../services/api/api";
import CardComponent from "./../common/CardComponent";

const { Text, Title } = Typography;

const Categories = () => {
  const [productsAvailable, setProductsAvailable] = useState(false);
  const [category, setCategory] = useState("");

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
    localStorage.setItem("products", JSON.stringify(products));
    let list = JSON.parse(localStorage.getItem("products"));
    console.log("list", list);
  };

  const handleRefreshCategory = () => {
    refetchCategory();
    setProductsAvailable(!productsAvailable);
  };

  return (
    <div className="products-container">
      {isLoadingCategory && <Title level={2}>Loading...</Title>}
      {!isLoadingCategory && !productsAvailable && (
        <>
          {categories?.map((category, index) => {
            return (
              <Button
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
                  <CardComponent {...product} />
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
