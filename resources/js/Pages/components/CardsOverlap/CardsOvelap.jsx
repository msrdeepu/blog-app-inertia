import React from "react";
import "./cards.css";
import { Card } from "antd";

const CardsOvelap = () => {
    return (
        <div className="overlap-top-container">
            <div>
                What is Lorem Ipsum in English? Lorem ipsum is derived from the
                Latin “dolorem ipsum” roughly translated as “pain itself.” Lorem
                ipsum presents the sample font and orientation of writing on web
                pages and other software applications where content is not the
                main concern of the developer.
            </div>
            <hr className="side-lie-bc" />
            <div>
                What is Lorem Ipsum in English? Lorem ipsum is derived from the
                Latin “dolorem ipsum” roughly translated as “pain itself.” Lorem
                ipsum presents the sample font and orientation of writing on web
                pages and other software applications where content is not the
                main concern of the developer.
            </div>
            <hr className="side-lie-bc" />
            <div>
                Lorem ipsum is derived from the Latin “dolorem ipsum” roughly
                translated as “pain itself.” Lorem ipsum presents the sample
                font and orientation of writing on web pages and other software
                applications where content is not the main concern of the
                developer.
            </div>
        </div>
    );
};

export default CardsOvelap;
