import React, { Component } from "react";
import { Breadcrumb, Layout } from "antd";

const { Content } = Layout;

export class AppContent extends Component {
  render() {
    return (
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>
            <strong>{this.props.title}</strong>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="workplace-area">{this.props.content}</div>
      </Content>
    );
  }
}
