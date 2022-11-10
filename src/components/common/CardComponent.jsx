import {
  EditOutlined,
  EllipsisOutlined,
  MinusOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card } from "antd";
import React from "react";

const { Meta } = Card;

const CardComponent = ({ title, image, description, price, id }) => {
  const getId = () => {
    console.log("id", id);
  };
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={<img alt="example" src={image} />}
      actions={[
        <Button type="danger" shape="circle" icon={<MinusOutlined />} />,
        <Button shape="circle">0</Button>,
        // <EllipsisOutlined key="ellipsis" />,
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={getId}
        />,
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
  price: "$45.66",
};
