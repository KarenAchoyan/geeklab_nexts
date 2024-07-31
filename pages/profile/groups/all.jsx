import React from 'react';
import {Button, Card, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";

const All = () => {
    const groups = [
      {id: 1, name: "Group1"},
      {id: 2, name: "Group2"},
      {id: 3, name: "Group3"},
      {id: 4, name: "Group4"},
  ]

  function handleEditCategory(categoryId) {

  }

  function handleDeleteCategory(categoryId) {

  }

  const columns = [
    {
      title: "Name",
      dataIndex: 'name',
      key: 'name'
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
      <Card title={'My groups'}>
        <Table dataSource={groups} columns={columns} rowKey={'id'}/>
      </Card>
    </App>
  );
};

export default All;