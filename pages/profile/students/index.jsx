import React from 'react';
import {Button, Card, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";

const Index = () => {
  const students = [
    {id: 1, name: "Gagik", surname: "Tsarukyan", email: "Gagoooooo@gmail.com", grade: 7},
    {id: 2, name: "Vladimir", surname: "Putin", email: "Putin@gmail.com", grade: 9999999},
    {id: 3, name: "Hovik", surname: "Mkoyan", email: "Hovik@gmail.com", grade: 4},
    {id: 4, name: "Tyomik", surname: "Hakobyan", email: "Tyomik@gmail.com", grade: 1},
  ]

  function handleDeleteCategory(id) {
    return undefined;
  }

  function handleEditCategory(id) {
    
  }

  const columns = [
    {
      title: "Name",
      dataIndex: 'name',
      key: 'name'
    },

    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname"
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },

    {
      title: "Middle Grade",
      dataIndex: "grade",
      key: "midGrade"
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
            Edit
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
      <Card title={"Student list"}>
        <Table dataSource={students} columns={columns} rowKey={'id'}/>
      </Card>
    </App>
  );
};

export default Index;