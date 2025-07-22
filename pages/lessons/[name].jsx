import React, { useEffect, useState } from 'react';
import App from "../../components/layouts/app";
import styles from "../../styles/lessons.module.css";
import { useRouter } from "next/router";
import { getLessons } from "@/utils/utils";
import Head from "next/head";
import { Button, Modal, Form, Input, DatePicker, message } from 'antd';

const Name = () => {
    const router = useRouter();
    const { name } = router.query;
    const { locale } = useRouter();
    const [content, setContent] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        if (name) {
            const lessons = getLessons();
            const data = lessons.find(x => x.slug === name);
            setContent(data);
        }
    }, [name]);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const handleOk = () => {
        form.validateFields()
            .then(values => {
                message.success('Application submitted!');
                setIsModalOpen(false);
                form.resetFields();
            })
            .catch(() => {});
    };

    const getLocalizedText = (field) => {
        return locale === 'hy'
            ? field?.hy
            : locale === 'ge'
                ? field?.ge
                : field?.en;
    };

    return (
        <App>
            <Head>
                <title>{getLocalizedText(content?.title)}</title>
                <meta name="description" content={getLocalizedText(content?.content)} />
                <meta name="keywords" content="GeekLab, programming, development, design, marketing, lessons, courses, learning" />
                <meta property="og:title" content={getLocalizedText(content?.title)} />
                <meta property="og:description" content={getLocalizedText(content?.content)} />
                <link rel="canonical" href={`https://www.yourwebsite.com/lessons/${content?.slug}`} />
            </Head>

            <div className={styles.lessonPageContainer}>
                <div className={styles.lessonCard}>
                    <h1 className={styles.lessonTitle}>
                        {getLocalizedText(content?.title)}
                    </h1>
                    <p className={styles.lessonDescription}>
                        {getLocalizedText(content?.content)}
                    </p>
                    <Button
                        type="primary"
                        className={styles.applyButton}
                        onClick={showModal}
                    >
                        Apply Now
                    </Button>
                </div>
            </div>

            <Modal
                title="Apply for this Lesson"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Submit"
                cancelText="Cancel"
            >
                <Form
                    form={form}
                    layout="vertical"
                    name="applyForm"
                >
                    <Form.Item
                        name="name"
                        label="Full Name"
                        rules={[{ required: true, message: 'Please enter your name' }]}
                    >
                        <Input placeholder="John Doe" />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
                    >
                        <Input placeholder="john@example.com" />
                    </Form.Item>
                    <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[{ required: true, message: 'Please enter your phone number' }]}
                    >
                        <Input placeholder="+1234567890" />
                    </Form.Item>
                    <Form.Item
                        name="birthday"
                        label="Birthday"
                        rules={[{ required: true, message: 'Please select your birthday' }]}
                    >
                        <DatePicker
                            picker="date"
                            style={{ width: '100%' }}
                            placeholder="YYYY-MM-DD"
                            format="YYYY-MM-DD"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </App>
    );
};

export default Name;
