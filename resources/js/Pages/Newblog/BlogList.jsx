import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography, Table, Space, Button } from "antd";

function BlogList({ props, ramyaVar }) {
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

    const tableData = [
        {
            id: 1,
            posttitle: "Demo",
            createdby: "Sandeep",
            status: "Active",
        },
        {
            id: 2,
            posttitle: "Second Post",
            createdby: "Ramya",
            status: "Active",
        },
        {
            id: 3,
            posttitle: "Third Post",
            createdby: "Someone",
            status: "inactive",
        },
    ];

    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, Sandeep`}>
                <Table columns={dataColums} dataSource={tableData} />
            </Card>
        </>
    );
}

BlogList.layout = (page) => <AuthenticatedLayout children={page} />;

export default BlogList;
