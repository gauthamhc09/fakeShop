import React, { useEffect } from "react";
import {
  useGetCategoriesQuery,
  useGetProductsOnCategoryQuery,
} from "../../services/api/api";
import Category from "../common/Category";

const Categories = () => {
  // const { data, isLoading } = useGetProductsQuery();
  const { data, isLoading } = useGetCategoriesQuery();  
  
  const { list } = useGetProductsOnCategoryQuery();

  
  return (
    <div className="products-container">
      {isLoading && <h2>Loading....</h2>}
      {!isLoading && (
        <>
          {data?.map((category, index) => {
            return <Category categoryName={category} key={index} />;
          })}
        </>
      )}

      {/* <>
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
      </> */}

      {/* {!isLoading &&  <>
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
      </>} */}
    </div>
  );
};

export default Categories;
