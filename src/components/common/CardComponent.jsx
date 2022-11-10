import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined
} from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardComponent = ({ title, image, description, price }) => {
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src={image}
        />
       
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        avatar={`$${price}`}
        title={title}
        // description={description}
      />
    </Card>
  );
};

export default CardComponent;

CardComponent.defaultProps = {
  title: "Card title",
  description: "This is the description",
  image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  price: "$45.66"
};
