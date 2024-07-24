import React, { useState } from 'react';
import { Card, Avatar, Button, Input } from 'antd';
import { UserOutlined, MessageOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Post = () => {
    const [commentsVisible, setCommentsVisible] = useState(false);
    const [comments, setComments] = useState([
        { author: 'User1', content: 'Nice post!' },
        { author: 'User2', content: 'I agree!' },
    ]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, { author: 'You', content: newComment }]);
            setNewComment('');
        }
    };

    return (
        <Card
            style={{ maxWidth: 800, margin: 'auto', marginTop: 20 }}
            actions={[
                <Button
                    type="link"
                    icon={<MessageOutlined />}
                    onClick={() => setCommentsVisible(!commentsVisible)}
                >
                    Comments
                </Button>
            ]}
        >
            <Card.Meta
                avatar={<Avatar icon={<UserOutlined />} />}
                title="Gaiane Oganesyan"
                description="Բարի՜ ձե՛զ❤️ Սիրելի՛ մասնակիցներ այս խմբում ջաները ձեզ..."
            />
            {commentsVisible && (
                <div style={{ marginTop: 20 }}>
                    <div>
                        {comments.map((comm, index) => (
                            <div key={index}>
                                {comm.author}
                                <p>{comm.content}</p>
                            </div>
                        ))}
                    </div>
                    <TextArea
                        rows={4}
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment"
                        style={{ marginTop: 10 }}
                    />
                    <Button
                        type="primary"
                        onClick={handleAddComment}
                        style={{ marginTop: 10 }}
                    >
                        Add Comment
                    </Button>
                </div>
            )}
        </Card>
    );
};

export default Post;
