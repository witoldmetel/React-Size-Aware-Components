import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import { Topic1, Topic2 } from "./components/index";

const { Header, Footer, Sider } = Layout;
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
      }
    ];
  }

  get subMenuContent() {
    return [
      {
        id: 3,
        title: "Option 1"
      },
      {
        id: 4,
        title: "Option 2"
      },
      {
        id: 5,
        title: "Option 3"
      }
    ];
  }

  getMenu = data => {
    return (
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["3"]}
        mode="inline"
      >
        {data.map(item => {
          return (
            <Menu.Item key={item.id}>
              <Link to={`/topic${item.id}`}>
                <Icon type="project" />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          );
        })}
        <SubMenu
          title={
            <React.Fragment>
              <Icon type="project" />
              <span>Topic 3</span>
            </React.Fragment>
          }
        >
          <Menu.Item key="3">Option 1</Menu.Item>
          <Menu.Item key="4">Option 2</Menu.Item>
          <Menu.Item key="5">Option 3</Menu.Item>
        </SubMenu>
      </Menu>
    );
  };

  render() {
    return (
      <Router>
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
            <Route path="/topic1" exact component={Topic1} />
            <Route path="/topic2" component={Topic2} />
            <Footer>
              Measurement of React Components ©2019 Created by Witold Mętel
              (SoftServe)
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
