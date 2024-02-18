import GuesLayout from "../Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";
import { Button, Col, Row, Typography } from "antd";
import CardsOvelap from "./components/CardsOverlap/CardsOvelap";

import BlogSlider from "./components/BlogSlider";
import LatestBlogs from "./components/latestBlogs/LatestBlogs";
import FeaturedArticle from "./components/FeaturedArticle";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <Row>
                    <Col xs={24}>
                        <BlogSlider />
                    </Col>
                </Row>
                <Row>
                    <Col xs={24} md={4}></Col>
                    <Col xs={24} md={16}>
                        <CardsOvelap />
                    </Col>
                    <Col xs={24} md={4}></Col>
                </Row>
                <Row>
                    <Col xs={24} md={4}></Col>
                    <Col xs={24} md={16}>
                        <h1 className="latest-blogs-section-title">
                            HAVE A LOOK AT LATEST ARTICLES{" "}
                        </h1>
                        <LatestBlogs />
                        <LatestBlogs />
                        <LatestBlogs />
                    </Col>
                    <Col xs={24} md={4}></Col>
                </Row>
                <Row>
                    <Col xs={24} md={4}></Col>
                    <Col xs={24} md={16}>
                        <h1 className="latest-blogs-section-title">
                            FEATURED ARTICLES{" "}
                        </h1>
                        <FeaturedArticle />
                    </Col>
                    <Col xs={24} md={4}></Col>
                </Row>
            </div>
        </>
    );
}
Welcome.layout = (page) => <GuesLayout children={page} />;
