import React from 'react';
import {Button, Card, Popconfirm, Space, Table} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import App from "@/components/profile/layouts/app";

const All = () => {
  const lessons = [
    {id: 1, title: "Lesson1", groupName: "JS"},
    {id: 2, title: "Lesson2", groupName: "Native JS"},
    {id: 3, title: "Lesson3", groupName: "Node JS"},
    {id: 4, title: "Lesson4", groupName: "HTML/CSS"},
  ]

  function handleDeleteCategory(id) {
    return undefined;
  }

  function handleEditCategory(id) {
    
  }

  const columns = [
    {
      title: "Lesson",
      dataIndex: 'title',
      key: 'name'
    },

    {
      title: "Group",
      dataIndex: "groupName",
      key: "group"
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
      <Card title={'All Lessons'}>
        <Table dataSource={lessons} columns={columns} rowKey={'id'}/>
      </Card>
    </App>
  );
};

export default All;