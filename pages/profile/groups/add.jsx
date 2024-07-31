import React from 'react';
import App from "@/components/profile/layouts/app";
import {Button, Card, Form, Input, Space} from 'antd';
import * as PropTypes from "prop-types";


const Add = () => {
  const [form] = Form.useForm();

  function handlerSubmit() {
    alert()
  }

  return (
    <>
      <App>
        <Card title="Add Group">
          <Form form={form} layout='vertical' onFinish={handlerSubmit}>
            <Form.Item
              name='name'
              label='Name'
              rules={[
                {required: true, message: "Please write group name"}
              ]}
            >
              <Input/>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Add Group
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </App>
    </>
  );
};

export default Add;