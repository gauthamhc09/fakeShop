import { ShoppingCartOutlined } from "@ant-design/icons";
import { Anchor, Button, Drawer, Image } from "antd";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const { Link } = Anchor;


const AppHeader = () => {
  const [visible, setVisible] = useState(false);
  const navigateTo = useNavigate();

  const {cartTotalQuantity} = useSelector((state) => state.cart)

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const reRoutetoHomePage = () => {
    navigateTo('/')
  }
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
          <Button type="text" href="/cart" icon={<ShoppingCartOutlined />} className="shoppingCart"><span className="cartQuantity">{cartTotalQuantity}</span></Button>
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
