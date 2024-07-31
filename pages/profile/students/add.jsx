import React, {useState} from 'react';
import App from "@/components/profile/layouts/app";
import {Form, Select, Space, Radio, Input, Button} from 'antd';
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


const Add = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;

  return (
    <App>
      <h2 style={{ marginBottom: 35}}>Choose Group</h2>
      <Space wrap>
        <Select
          defaultValue="HTML/CSS"
          style={{
            width: 120,
          }}
          onChange={handleChange}
          options={[
            {
              value: 'HTML/CSS',
              label: 'HTML/CSS',
            },
            {
              value: 'javascript',
              label: 'JavaScript',
            },
            {
              value: 'react',
              label: 'React JS',
            },
            {
              value: 'php',
              label: 'PHP'
            },
            {
              value: 'laravel',
              label: 'Laravel'
            },
          ]}
        />
      </Space>

      <Form
        name="wrap"
        labelCol={{
          flex: '110px',

        }}
        labelAlign="left"
        labelWrap
        wrapperCol={{
          flex: 1,
        }}
        colon={false}
        style={{
          maxWidth: 600,
        }}
      >
        <h2 style={{marginTop: 20}}>Enter Email address</h2>

        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              type: 'email',
              message: 'Enter correct Email address',
            },
          ]}
        >

          <Input style={{
            marginTop: 30
          }} placeholder="Enter Email"/>
        </Form.Item>
        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </App>
  );
};

export default Add;