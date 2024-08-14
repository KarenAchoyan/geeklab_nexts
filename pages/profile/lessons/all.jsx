import React, {useState} from 'react';
import {Input, Button, Form, Modal, TimePicker, Card, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";
import moment from 'moment';

const Index = () => {
  const [number, setNumber] = useState('');
  const [dataSource, setDataSource] = useState([
    {
      id: '1',
      key: 'action',
      group: 'Group1',
      lesson: 'LessonX',
    },
    {
      id: '2',
      key: 'action',
      lesson: 'LessonX',
      group: 'Group2',
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
      title: 'Group Name',
      dataIndex: 'group',
      width: '20%',
      editable: true,
    },
    {
      title: 'Lesson',
      dataIndex: 'lesson',
      width: '20%',
      editable: true,
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
      <Card title={"All Lessons"}>
        <Table
          dataSource={dataSource}
          columns={editableTableColumns}
          rowClassName="editable-row"
          pagination={false}
        />
      </Card>
      <Modal
        title="Edit Lessons"
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
            name="Lesson"
            label="Lesson"
            rules={[{required: true, message: 'Please input the lesson!'}]}
          >
            <Input/>
          </Form.Item>
          <Form.Item
            name="Group"
            label="Group"
            rules={[{required: true, message: 'Please input the group!'}]}
          >
            <Input/>
          </Form.Item>

        </Form>
      </Modal>
    </App>
  );
};

export default Index;
