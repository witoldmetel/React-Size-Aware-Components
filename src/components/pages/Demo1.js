import React, { Component } from "react";
import { Card } from "antd";

import { AppContent } from "../AppContent";

import "./Demo1.less";

export class Demo1 extends Component {
  get content() {
    return (
      <Card className="demo-card" title="Size Aware Component">
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }

  render() {
    return <AppContent title="Demo 1" content={this.content} />;
  }
}
