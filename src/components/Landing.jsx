import { Carousel } from "antd";
import { Image } from "antd";
import React from "react";
// import Cloth1 from "./../assets/images/index"
import { Cloth1, Cloth2, Cloth3, Cloth4, Cloth5 } from "./../assets/images";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const Landing = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div>
      <Carousel  autoplay>
        <div>
          <Image

            src={Cloth1}
            preview={false}
          />
        </div>
        <div>
          <Image

            src={Cloth2}
            preview={false}
          />
        </div>
        <div>
          <Image

            src={Cloth3}
            preview={false}
          />
        </div>
        <div>
          <Image

            src={Cloth4}
            preview={false}
          />
        </div>
        <div>
          <Image

            src={Cloth5}
            preview={false}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Landing;
