import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Typography, Alert } from 'antd';
import App from "../../components/layouts/app";
import { validateEmail, validatePassword } from "../../utils/utils";
import styles from "../../styles/registration.module.css";

const { Title, Paragraph } = Typography;

const Index = () => {
    const router = useRouter();
    const [error, setError] = useState(null);

    const onFinish = (values) => {
        console.log('Received values:', values);
        router.push('/dashboard');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError('Please fill in all fields');
    };

    return (
        <App>
            <div className={styles.registrationContainer}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                    <div style={{ width: '400px', textAlign: 'center' }}>
                        <Title style={{ color: "white" }} level={2}>Registration</Title>
                        <Paragraph style={{ color: "white", margin: '20px 0' }}>Lorem ipsum dolor sit amet, consecteturs explicabo id maxime</Paragraph>
                        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '16px' }} />}
                        <Form
                            name="login"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            initialValues={{ remember: true }}
                        >
                            <Form.Item
                                name="name"
                                rules={[{ required: true, message: 'Please input your name!' }]}
                            >
                                <Input placeholder="Name" />
                            </Form.Item>
                            <Form.Item
                                name="surname"
                                rules={[{ required: true, message: 'Please input your surname!' }]}
                            >
                                <Input placeholder="Surname" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[{ required: true, message: 'Please input your phone number!' }]}
                            >
                                <Input placeholder="Phone Number" />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    { required: true, message: 'Please input your email!' },
                                    { validator: validateEmail }
                                ]}
                            >
                                <Input placeholder="Email" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    { required: true, message: 'Please input your password!' },
                                    { validator: validatePassword }
                                ]}
                            >
                                <Input.Password placeholder="Password" />
                            </Form.Item>
                            <Form.Item
                                name="confirmPassword"
                                dependencies={['password']}
                                rules={[
                                    { required: true, message: 'Please confirm your password!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject('The two passwords do not match!');
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Confirm Password" />
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Registration
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </App>
    );
};

export default Index;
