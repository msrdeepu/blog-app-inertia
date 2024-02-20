import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function BlogList({ props, ramyaVar }) {
    return (
        <>
            <Head title="Dashboard" />
            {/* {console.log(ramyaVar)} */}

            <Card title={`Welcome, Sandeep`}>
                <Typography.Text>{`Hello ${ramyaVar}`}</Typography.Text>
            </Card>
        </>
    );
}

BlogList.layout = (page) => <AuthenticatedLayout children={page} />;

export default BlogList;
