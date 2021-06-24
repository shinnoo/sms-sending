import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Input, Row, Col, Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  PoweroffOutlined
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const { TextArea } = Input;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
    loadings: []
  };

  enterLoading = index => {
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 6000);
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    const { loadings } = this.state;
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Gửi tin nhắn
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Row justify="start" gutter={[24, 16]}>
              <Col span={4}>
                <Input size="large" placeholder="client_token_api" />
              </Col>
              <Col span={4}>
                <Input size="large" placeholder="client_signature" />
              </Col>
              <Col span={4}>
                <Input size="large" placeholder="client_code_request" />
              </Col>
              <Col span={4}>
                <Button type="primary" size="large" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                  Click me!
                </Button>
              </Col>
            </Row>
            <TextArea style={{marginTop:'25px'}} rows={30} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

ReactDOM.render(<SiderDemo />, document.getElementById('root'));