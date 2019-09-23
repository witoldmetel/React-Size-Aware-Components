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

  get menuContent() {
    return [
      {
        id: 1,
        title: "Topic 1"
      },
      {
        id: 2,
        title: "Topic 2"
      },
      {
        id: 3,
        title: "Topic 3"
      }
    ];
  }

  getMenu = data => {
    return (
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {data.map(item => {
          return (
            <Menu.Item key={item.id}>
              <Icon type="project" />
              <span>{item.title}</span>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          {this.getMenu(this.menuContent)}
        </Sider>
        <Layout>
          <Header className="header">
            <strong>React Size Aware Components</strong>
          </Header>
          <Content>
            <Breadcrumb>
              <Breadcrumb.Item>
                <strong>Option 1</strong>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="workplace-area">Empty Space</div>
          </Content>
          <Footer>
            Measurement of React Components ©2019 Created by Witold Mętel
            (SoftServe)
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
