import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

import { Demo1, Demo2, Demo3, Demo4, Demo5 } from "./components/index";

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
        title: "Demo 1"
      },
      {
        id: 2,
        title: "Demo 2"
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
              <Link to={`/demo${item.id}`}>
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
              <span>Demo 3</span>
            </React.Fragment>
          }
        >
          {this.subMenuContent.map(item => {
            return (
              <Menu.Item key={item.id}>
                <Link to={`/demo${item.id}`}>
                  <span>{item.title}</span>
                </Link>
              </Menu.Item>
            );
          })}
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
            <Route path="/demo1" exact component={Demo1} />
            <Route path="/demo2" component={Demo2} />
            <Route path="/demo3" component={Demo3} />
            <Route path="/demo4" component={Demo4} />
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
