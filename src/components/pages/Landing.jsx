import { Carousel, Image } from "antd";
import React from "react";
// import Cloth1 from "./../assets/images/index"
import { Cloth1, Cloth2, Cloth3, Cloth4, Cloth5 } from "../../assets/images";
import { useNavigate } from "react-router-dom"
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const imageStyle = {
  width: "100%",
  height: "70vh",
};

const Landing = () => {
  const navigateTo = useNavigate();
  const routetoProductPage = () => {
    navigateTo("/category")
  }
  return (
    <div className="landingPage" >
      <Carousel autoplay style={{ height: "70vh" }}>
        <div>
          <Image style={imageStyle} src={Cloth1} preview={false} onClick={routetoProductPage} />
        </div>
        <div>
          <Image style={imageStyle} src={Cloth2} preview={false} onClick={routetoProductPage} />
        </div>
        <div>
          <Image style={imageStyle} src={Cloth3} preview={false} onClick={routetoProductPage} />
        </div>
        <div>
          <Image style={imageStyle} src={Cloth4} preview={false} onClick={routetoProductPage} />
        </div>
        <div>
          <Image style={imageStyle} src={Cloth5} preview={false} onClick={routetoProductPage} />
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
