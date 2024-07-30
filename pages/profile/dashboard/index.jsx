import React from 'react';
import { Layout } from 'antd';
import App from "../../../components/profile/layouts/app";
const { Content } = Layout;

import StoriesSlider from "../../../components/profile/storiesSlider/stories";
import StatusUpdate from "../../../components/profile/status/status";
import Post from "../../../components/profile/status/post";
const Index = () => {
    return (
        <>
            <App>
                <Layout
                    style={{
                        minHeight: '100vh',
                        background: 'linear-gradient(to top right, #0F173E, #0A0A0B, #0F173E, #0A0A0B, #0F173E, #0A0A0B, #0F173E, #0A0A0B)',
                        padding: '20px' }}>
                    <Content style={{ width: "800px", margin: '0 auto' }}>
                        <StoriesSlider />
                        <StatusUpdate
                            userName="Karen"
                            userImage="/register.png"
                        />
                        <Post/>
                      <h1>Test</h1>
                    </Content>
                </Layout>
            </App>
        </>
    );
};

export default Index;