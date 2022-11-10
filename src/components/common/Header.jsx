import { ScissorOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Anchor } from "antd";
import React from "react";
import { useGetProductsQuery } from "../../services/api/api";
const { Link } = Anchor;
const AppHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <ScissorOutlined />
      </div>
      <div className="mobileHidden">
        <Anchor targetOffset="65">
          <Link href="/" title="Home" />
          <Link href="/products" title="Products" />

          <Link href="/cart">
            <ShoppingCartOutlined style={{ color: "#fff" }} />
          </Link>
        </Anchor>
      </div>
    </div>
  );
};

export default AppHeader;
