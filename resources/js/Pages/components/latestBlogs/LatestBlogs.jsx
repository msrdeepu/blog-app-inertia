import { Card, Row, Col, Button } from "antd";
import React from "react";
import "./latest.css";
const LatestBlogs = () => {
    return (
        <>
            <Card
                className="latest-blogs-section-card-item"
                style={{ marginTop: "15px" }}
            >
                <Row gutter={[8, 4]}>
                    <Col xs={24} md={10}>
                        <img
                            className="card-img-item"
                            src="https://e1.pxfuel.com/desktop-wallpaper/678/506/desktop-wallpaper-backgrounds-flex-banner-design-banner-design.jpg"
                        />
                    </Col>
                    <Col xs={24} md={14}>
                        <p>
                            <mark
                                style={{
                                    backgroundColor: "lightgreen",
                                    borderRadius: "4px",
                                }}
                            >
                                Author:Sandeep
                            </mark>
                        </p>
                        <h1>Title the Title Goes Here</h1>
                        <p>
                            What is Lorem Ipsum in English? Lorem ipsum is
                            derived from the Latin “dolorem ipsum” roughly
                            translated as “pain itself.” Lorem ipsum presents
                            the sample font and orientation of writing on web
                            pages and other
                        </p>
                        <Row>
                            <Col xs={24} md={12}>
                                <p>
                                    <mark>Published On: 12/12/12</mark>
                                </p>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type="primary">Read More</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>{" "}
            </Card>
        </>
    );
};

export default LatestBlogs;
