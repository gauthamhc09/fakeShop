import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useGetProductsOnCategoryQuery } from "../../services/api/api";

const Category = ({ categoryName }) => {
  const [category, setCategory] = useState(categoryName);

  const { data, refetch } = useGetProductsOnCategoryQuery(categoryName);
  
  console.log('category-data', data)
  const categoryStyle = {
    margin: "16px",
    textTransform: "capitalize",
  };

  const callCategoryProducts = (categoryName) => {
    setCategory(categoryName)
    refetch();
  };

  return (
    <>
      <Button
        style={categoryStyle}
        onClick={() => callCategoryProducts(categoryName)}
      >
        {categoryName}
      </Button>
    </>
  );
};

export default Category;
