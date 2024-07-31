import React from 'react';
import {Button, Card, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";

const Index = () => {
  const homeworks = [
    {id: 1, name: "Homework1", group: "Group1", email: "Gagoooooo@gmail.com"},
    {id: 2, name: "Homework2", group: "Group2", email: "Gag@gmail.com"},
    {id: 3, name: "Homework3", group: "Group3", email: "Hovik@gmail.com"},
    {id: 4, name: "Homework4", group: "Group4", email: "Tyomik@gmail.com"},
  ]

  function handleEditCategory(id) {
    
  }

  function handleDeleteCategory(id) {
    return undefined;
  }

  const columns = [
    {
      title: "Name",
      dataIndex: 'name',
      key: 'name'
    },

    {
      title: "Group",
      dataIndex: "group",
      key: "group"
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },

    {
      title: "Actions",
      dataIndex: 'id',
      key: 'action',
      render: (id) => (
        <Space size="small">
          <Button
            type="primary"
            icon={<EditOutlined/>}
            onClick={() => handleEditCategory(id)}
            key={`edit_${id}`}
          >
            Grade
          </Button>
          <Popconfirm
            title="Are you sure you want to delete this category?"
            onConfirm={() => handleDeleteCategory(id)}
            okText="Yes"
            cancelText="No"
            key={"delete"+id}
          >
            <Button type="primary" danger icon={<DeleteOutlined/>} key={`confirm_${id}`}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ]
  return (
    <App>
      <Card title={"Homeworks"}>
      <Table dataSource={homeworks} columns={columns} rowKey={'id'}/>
      </Card>
    </App>
  );
};

export default Index;