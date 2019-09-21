import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import "./App.less";

export class App extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <Icon type="project" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="project" />
              <span>Option 2</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            React Size Aware Components
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              Empty Space
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Measurement of React Components ©2019 Created by Witold Mętel
            (SoftServe)
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
