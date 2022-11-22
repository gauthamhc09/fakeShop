import { ShoppingCartOutlined } from "@ant-design/icons";
import { Anchor, Button, Drawer, Image } from "antd";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useGetProductsOnCategoryQuery } from "../../services/api/api";
import { addToCart } from "../../services/features/cartSlice";

const { Link } = Anchor;


const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const [productsonHeader, setProductsonHeader] = useState([])

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const { cartTotalQuantity } = useSelector((state) => state.cart)
  // const { productItems } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);
  const {
    data: products,
    isLoading: isLoadingProducts,
    refetch: refetchProducts,
    error: productsError
  } = useGetProductsOnCategoryQuery(category);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const reRoutetoHomePage = () => {
    navigateTo('/')
  }

  // drag and drop functionality
  const addItemToCart = (id) => {
    console.log("isLoadingProducts",isLoadingProducts)
    setProductsonHeader(products)
    console.log('products-Header',productsonHeader)
    const productList = productsonHeader?.filter(item => item.id === id)
    console.log('productList',productList)
    dispatch(addToCart(productList[0]));
    // if(!isLoadingProducts) {
    //    console.log('products inside addItemToCart', products)
    //   const productList = products?.filter(item => item.id === id)
      
    //   dispatch(addToCart(productList[0]));
      
    // }
   
  }

  //drag and drop events
  const [{ isOver }, drop] = useDrop(() => (
    {
      accept: "image",
      drop: (item) => addItemToCart(item.id),
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }
  ))

  
  

  return (
    <div className="header">
      <div className="logo" onClick={reRoutetoHomePage}>
        <Image
          width={38}
          preview={false}
          src="https://cdn.dribbble.com/userupload/3166871/file/original-88c171574ab1efceb7a8ef011b2f88b4.jpg?compress=1&resize=752x"
        />
      </div>
      <div className="mobileHidden">
        <Anchor>
          <Link href="/" title="Home" />
          <Link href="/category" title="Products" />
          <Button ref={drop} type="text" href="/cart" icon={<ShoppingCartOutlined />} className="shoppingCart"><span className="cartQuantity">{cartTotalQuantity}</span></Button>
        </Anchor>
      </div>
      <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
          <i className="fas fa-bars"></i>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <Anchor targetOffset="65">
            <Link href="/" title="Home" />
            <Link href="/category" title="Products" />
            <Link href="/cart" title="Cart" />
          </Anchor>
        </Drawer>
      </div>
    </div>
  );
};

export default AppHeader;
