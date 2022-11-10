import { ScissorOutlined } from "@ant-design/icons";
import { Anchor } from "antd";
import React from "react";
import { useGetPrizesQuery } from "../../store/features/productsSlice";
const { Link } = Anchor;
const AppHeader = () => {

  const {data} = useGetPrizesQuery();

  console.log('data', data)
  return (
    <div className="header">
      <div className="logo">
        <ScissorOutlined />
      </div>
      <div className="mobileHidden">
        <Anchor targetOffset="65">
          <Link href="/" title="Home" />
          <Link href="/products" title="Products" />
          <Link href="/cart" title="Cart" />
        </Anchor>
      </div>
    </div>
  );
};

export default AppHeader;
