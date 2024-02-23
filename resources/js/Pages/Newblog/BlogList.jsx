import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Table, Space, Button } from "antd";

function BlogList({ props, ramyaVar, allBlogs }) {
    const dataColums = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "Post Title",
            dataIndex: "posttitle",
            key: "id",
        },
        {
            title: "Created By",
            dataIndex: "author",
            key: "id",
        },

        {
            title: "Status",
            dataIndex: "status",
            key: "status",
        },
        {
            title: "Created On",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Actions",
            render: (_, index) => (
                <Space>
                    <Button type="primary">Edit</Button>
                    <Button type="primary" danger>
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    {
        console.log(allBlogs);
    }

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, Sandeep`}>
                <Table columns={dataColums} dataSource={allBlogs} />
            </Card>
        </>
    );
}

BlogList.layout = (page) => <AuthenticatedLayout children={page} />;

export default BlogList;
