import logo from './logo.png'
import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Avatar, Badge } from 'antd';
import './frame.less';
import { adminRoutes } from '../../routes';
import { withRouter } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

// 通过装饰器模式，让组件的props具有router的history属性
@withRouter
class Frame extends Component {
    onClickHandler = ({ key }) => {
        this.props.history.push(key)
    }

    onMenuDropDownClick = ({ key }) => {
        console.log(key)
        this.props.history.push(key)
    }

    render() {
        const menu = (
            <Menu onClick={this.onMenuDropDownClick}>
                <Menu.Item key='/admin/notifications'>
                    <Badge dot>
                        通知中心
                    </Badge>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                        个人设置
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        );

        return (
            <Layout style={{ minHeight: '100%' }}>
                <Header className="header zisuye-header">
                    <div className="logo zisuye-logo">
                        <img src={logo} alt='LOGO' />
                    </div>
                    <div>
                        <Dropdown overlay={menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                <span>欢迎您，紫苏叶</span>
                                <Badge count={10} offset={[-10, -10]}>
                                    <DownOutlined />
                                </Badge>
                            </a>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[this.props.location.pathname]}
                            // defaultOpenKeys={['sub1']}
                            onClick={this.onClickHandler}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                adminRoutes.filter(item => item.nav === true).map(route => {
                                    return <Menu.Item key={route.pathname}>
                                        {/* <Icon type='dashboard' /> */}
                                        {route.title}
                                    </Menu.Item>
                                })
                            }
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 0' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Frame;