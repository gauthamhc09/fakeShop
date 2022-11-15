import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useGetProductsOnCategoryQuery } from "../../../services/api/api";

const Category = ({
  categoryName,
  changeProductsAvailable,
  productsAvailable,
}) => {
  const [category, setCategory] = useState(categoryName);

  const { data, refetch } = useGetProductsOnCategoryQuery(categoryName);

  const categoryStyle = {
    margin: "16px",
    textTransform: "capitalize",
  };

  const callCategoryProducts = (categoryName) => {
    setCategory(categoryName);
    refetch();
    changeProductsAvailable();
    
  };

  return (
    <>
      <Button
        style={categoryStyle}
        onClick={() => callCategoryProducts(categoryName)}
      >
        {categoryName}
      </Button>
      {productsAvailable &&
        data?.map((product) => console.log("product", product))}
    </>
  );
};

export default Category;
