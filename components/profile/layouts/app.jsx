import React from 'react';
import { Layout, Menu,Dropdown,Space,Avatar } from 'antd';
import {
    DashboardOutlined,
    UserOutlined,
    AppstoreOutlined,
    TeamOutlined,
    BookOutlined,
    FileOutlined, SettingOutlined, LogoutOutlined,
} from '@ant-design/icons';
import {menuItems} from "../../../utils/utils";
import Link from "next/link";
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const App = ({children}) => {
    const handleMenuClick = ({ key }) => {
        switch (key) {
            case 'settings':
                console.log('Navigate to settings');
                break;
            case 'logout':
                console.log('Log out user');
                break;
            default:
                break;
        }
    };

    const userMenu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
                Logout
            </Menu.Item>
        </Menu>
    );
    return (
        <>
            <Layout
                style={{
                    minHeight: '100vh',

                }}>
                <Sider collapsible>
                    <Menu theme="dark" style={{ marginTop: '20px',  }} defaultSelectedKeys={['dashboard']} mode="inline">
                        {menuItems.map((item) =>
                            item.children ? (
                                // Render SubMenu for items with children
                                <SubMenu key={item.key} icon={item.icon} title={item.label}>
                                    {item.children.map((subItem) => (
                                        <Menu.Item key={subItem.key}>
                                            <Link href={subItem.path}>{subItem.label}</Link>
                                        </Menu.Item>
                                    ))}
                                </SubMenu>
                            ) : (
                                // Render normal Menu.Item for items without children
                                <Menu.Item  key={item.key} icon={item.icon}>
                                    <Link href={item.path}>{item.label}</Link>
                                </Menu.Item>
                            )
                        )}
                    </Menu>
                </Sider>

                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Menu mode="horizontal" defaultSelectedKeys={['dashboard']} style={{ lineHeight: '64px', display:'flex', justifyContent:'flex-end', width:'100%' }}>
                            <div style={{ float: 'right', paddingRight: 24 }}>
                                <Dropdown overlay={userMenu} placement="bottomRight">
                                    <Space>
                                        <span>John Doe</span>
                                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                                    </Space>
                                </Dropdown>
                            </div>
                        </Menu>
                    </Header>
                    <Content style={{ margin: '16px', padding: 24, background: '#fff' }}>
                        <div style={{ minHeight: 360 }}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    );
};

export default App;