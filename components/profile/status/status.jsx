// components/StatusUpdate.js

import React, { useState } from 'react';
import { Card, Input, Avatar, Button, Upload, message } from 'antd';
import { UploadOutlined, FileOutlined, SendOutlined } from '@ant-design/icons';

const StatusUpdate = ({ userName, userImage }) => {
    const [fileList, setFileList] = useState([]);
    const [imageList, setImageList] = useState([]);
    const [messageContent, setMessageContent] = useState('');

    const handleImageUpload = ({ fileList: newFileList }) => {
        setImageList(newFileList);
    };

    const handleFileUpload = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const handleSubmit = () => {
        if (messageContent || imageList.length > 0 || fileList.length > 0) {
            // Handle submit logic
            message.success('Post submitted successfully!');
            // Reset form
            setMessageContent('');
            setImageList([]);
            setFileList([]);
        } else {
            message.error('Please add content to submit.');
        }
    };

    return (
        <Card style={{ marginTop: 16, borderRadius: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
                <Avatar size="large" src={userImage} />
                <Input
                    placeholder={`What's on your mind, ${userName}?`}
                    style={{ marginLeft: 10, borderRadius: 20 }}
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
                {/* Upload Image Button */}
                <Upload
                    listType="picture"
                    fileList={imageList}
                    onChange={handleImageUpload}
                    beforeUpload={() => false} // Prevent automatic upload
                    style={{ opacity: 0.7 }}
                >
                    <Button icon={<UploadOutlined />} type="primary" ghost>
                        Upload Image
                    </Button>
                </Upload>

                {/* Upload File Button */}
                <Upload
                    fileList={fileList}
                    onChange={handleFileUpload}
                    beforeUpload={() => false} // Prevent automatic upload
                    style={{ opacity: 0.7 }}
                >
                    <Button icon={<FileOutlined />} type="primary" ghost>
                        Upload File
                    </Button>
                </Upload>

                {/* Submit Button */}
                <Button
                    icon={<SendOutlined />}
                    type="primary"
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
        </Card>
    );
};

export default StatusUpdate;
