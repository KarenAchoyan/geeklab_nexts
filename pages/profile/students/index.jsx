import React, {useState} from 'react';
import {Input, Button, Form, Modal, Card, Table} from "antd";
import {DeleteOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";

const Index = () => {
  const [number, setNumber] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      id: '1',
      name: 'Vladimir',
      key: 'action',
      surname: 'Putin',
      email: 'Putin@gmail.com',
      midGrade: 90
    },
    {
      id: '2',
      name: 'Karen',
      key: 'action',
      surname: 'Achoyan',
      email: 'KarAch@gmail.com',
      midGrade: 90

    },
  ]);
  const [editingKey, setEditingKey] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editingRecord, setEditingRecord] = useState({});
  const [form] = Form.useForm();

  const isEditing = (record) => record.key === editingKey;
  const handleChange = (e) => {
    setNumber(e.target.value);
  };
  const edit = (record) => {
    setEditingKey(record.key);
    setEditingRecord(record);
    setModalVisible(true);
  };

  const cancel = () => {
    setEditingKey('');
    setModalVisible(false);
  };

  const save = () => {
    form
      .validateFields()
      .then((values) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => editingRecord.key === item.key);
        if (index > -1) {
          const item = newData[index];
          setDataSource(newData);
          setEditingKey('');
          setModalVisible(false);
        } else {
          newData.push(values);
          setDataSource(newData);
          setEditingKey('');
          setModalVisible(false);
        }
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };


  const editableTableColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'Surname',
      dataIndex: 'surname',
      width: '20%',
      editable: true,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      width: '20%',
      editable: true,
    },
    {
      title: 'Middle Grade',
      dataIndex: 'midGrade',
      width: '20%',
      editable: true
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        return (
          <>
            <Button type="link" onClick={() => edit(record)}>
              Edit
            </Button>
            <Button type="primary" danger icon={<DeleteOutlined/>} key={`confirm_${record}`}>
              Delete
            </Button>
          </>

        );

      },
    },
  ];

  return (
    <App>
      <Card title={"Our Students"}>
        <Table
          dataSource={dataSource}
          columns={editableTableColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Card>
      <Modal
        title="Edit Students list"
        visible={modalVisible}
        onCancel={cancel}
        onOk={save}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            ...editingRecord,
          }}
        >
          <Form.Item
            name="Name"
            label="Name"
            rules={[{required: true, message: 'Please input the name!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="Surname"
            label="Surname"
            rules={[{required: true, message: 'Please input the surname!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="Email"
            label="Email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Enter correct Email address',
              },
            ]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            name="Grade"
            label="Grade"
            rules={[{required: true, message: 'Please input the grade!'}]}
          >
            <Input
              type="number"
              id="numberInput"
              value={number}
              onChange={handleChange}
              placeholder="Enter a number"/>
            <p>You entered: {number}</p>
          </Form.Item>
        </Form>
      </Modal>
    </App>
  );
};

export default Index;
