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
          <Link href="#hero" title="Home" />
          <Link href="#about" title="Products" />
          <Link href="#feature" title="Cart" />
        </Anchor>
      </div>
    </div>
  );
};

export default AppHeader;
