import React from "react";

import { Col, Row, Grid, Form, Input, DatePicker, Select, Button } from "antd";

const { TextArea } = Input;

const NewBlogForm = ({ data, setData, submitHandler }) => {
    const [form] = Form.useForm();
    return (
        <Form layout="vertical" onFinish={submitHandler} form={form}>
            <Row gutter={[8, 4]}>
                <Col xs={24} md={12}>
                    {" "}
                    <Form.Item label="Blog Title" name="posttitle">
                        <Input
                            name="posttitle"
                            placeholder="Enter Blog Title"
                            onChange={(e) =>
                                setData("posttitle", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    {" "}
                    <Form.Item label="Author" name="author">
                        <Input
                            name="author"
                            placeholder="Enter Author Name"
                            onChange={(e) => setData("author", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    {" "}
                    <Form.Item label="Created At" name="date">
                        <Input
                            name="date"
                            type="date"
                            onChange={(e) => setData("date", e.target.value)}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    {" "}
                    <Form.Item label="Status" name="status">
                        <Select
                            onChange={(value) => setData("status", value)}
                            placeholder={"Select Status"}
                            options={[
                                { label: "Active", value: "active" },
                                { label: "InActive", value: "InActive" },
                            ]}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24}>
                    <Form.Item label="Blog Content" name="blogcontent">
                        {" "}
                        <TextArea
                            placeholder="Enter Blog Content"
                            name="blogcontent"
                            onChange={(e) =>
                                setData("blogcontent", e.target.value)
                            }
                        />
                    </Form.Item>
                </Col>
            </Row>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button
                    htmlType="submit"
                    style={{ margin: "5px" }}
                    type="primary"
                >
                    Submit
                </Button>
                <Button style={{ margin: "5px" }} danger>
                    Cancel
                </Button>
            </div>
        </Form>
    );
};

export default NewBlogForm;
