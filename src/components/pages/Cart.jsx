import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../services/features/cartSlice";

const { Meta } = Card;
const { Title } = Typography;

const CartComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <Title level={3} style={{ margin: "24px" }}>
        Cart
      </Title>
      {
        cartItems.length === 0 && <Title level={2} style={{ margin: 0 }}>
          No Items in Cart
        </Title>
      }
      <Row gutter={[16, 24]}>
        {cartItems?.map((item) => {
          const { title, image, description, price, id, cartQuantity } = item;
          return (
            <Col sm={12} lg={8} key={id}>
              <Card
                style={{
                  width: 300,
                }}
                cover={<img alt={title} src={image} />}
                actions={[
                  <Button >Quantity: {cartQuantity}</Button>,
                  <Button
                    type="danger"
                    onClick={() => dispatch(removeTodo(id))}
                  >
                    Remove
                  </Button>,
                ]}
              >
                <Meta avatar={`$${price}`} title={title} />
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default CartComponent;

CartComponent.defaultProps = {
  title: "Card title",
  description: "This is the description",
  image: "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  price: "$45.66",
};
