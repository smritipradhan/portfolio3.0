import React, { Component } from "react";
import StarSky from "react-star-sky";
import "react-star-sky/dist/index.css";

const BackGround = () => {
  return (
    <StarSky
      debugFps={true} // Default = false
      frameRate={30} // Default = 60
      //   style={{ opacity: 0.5 }} // applied to the div wrapper
      className={""} // applied to the div wrapper
      starColor={"rainbow"} // Default = 'white', options: 'rainbow', 'white/red/green/etc'[w3color], [r, g, b]
      skyColor={[20, 20, 100]}
      style={{ height: "200px", width: "200px" }}
    />
  );
};

export default BackGround;
