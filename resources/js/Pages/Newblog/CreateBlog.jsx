import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Card, Typography } from "antd";
import NewBlogForm from "./NewBlogForm";

function CreateBlog(props) {
    const { data, setData, error } = useForm({
        posttitle: "",
        author: "",
        date: "",
        status: "",
        blogcontent: "",
    });

    const submitHandler = () => {
        console.log(data);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Create New Blog`}>
                <NewBlogForm
                    data={data}
                    setData={setData}
                    submitHandler={submitHandler}
                />
            </Card>
        </>
    );
}

CreateBlog.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateBlog;
