import { useState } from 'react';
import { useRouter } from 'next/router';
import { Form, Input, Button, Typography, Alert } from 'antd';
import App from "../../components/layouts/app";
import {validateEmail, validatePassword} from "../../utils/utils";
import styles from "../../styles/registration.module.css"
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
                        <Title style={{color:"white"}} level={2}>Login</Title>
                        <Paragraph style={{color:"white", margin:'20px 0'}}>Lorem ipsum dolor sit amet, consecteturs explicabo id maxime</Paragraph>
                        {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '16px' }} />}
                        <Form
                            name="login"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            initialValues={{ remember: true }}
                        >
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
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                                    Log in
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
