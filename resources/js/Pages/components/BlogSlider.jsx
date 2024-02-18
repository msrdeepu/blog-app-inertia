import React from "react";
import { Carousel } from "antd";
const contentStyle = {
    height: "40vh",
    color: "#fff",
    lineHeight: "40vh",
    textAlign: "center",
    background: "#364d79",
};
const BlogSlider = () => (
    <Carousel
        dots={true}
        dotPosition="top"
        autoplay
        className="main-container-item"
    >
        <div>
            <h3 style={contentStyle}>1</h3>
        </div>
        <div>
            <h3 style={contentStyle}>2</h3>
        </div>
        <div>
            <h3 style={contentStyle}>3</h3>
        </div>
        <div>
            <h3 style={contentStyle}>4</h3>
        </div>
    </Carousel>
);
export default BlogSlider;
