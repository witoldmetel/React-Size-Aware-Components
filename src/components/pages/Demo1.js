import React, { Component } from "react";
import { Card, Button } from "antd";

import { AppContent } from "../AppContent";

import "./Demo1.less";

export class Demo1 extends Component {
  state = { size: {}, isSizeChange: false };

  componentDidUpdate() {
    if (this.state.isSizeChange) {
      this.getSize(this.elementRef.getBoundingClientRect());
      this.setState({ isSizeChange: false });
    }
  }

  refCallback = element => {
    if (element) {
      this.elementRef = element;
      this.getSize(element.getBoundingClientRect());
    }
  };

  getSize = size => {
    this.setState({ size });
  };

  onResize = () => {
    this.setState({ isSizeChange: true });
    console.log(this.state.size);
  };

  get resizeButton() {
    return (
      <Button
        type="primary"
        size="small"
        shape="circle"
        icon="swap"
        title="Resize Me!"
        onClick={this.onResize}
      />
    );
  }

  get content() {
    return (
      <div className="demo-card" ref={this.refCallback}>
        <Card title="Size Aware Component" extra={this.resizeButton}>
          <p>{`width: ${this.state.size.width} px`}</p>
          <p>{`height: ${this.state.size.height} px`}</p>
        </Card>
      </div>
    );
  }

  render() {
    return <AppContent title="Demo 1" content={this.content} />;
  }
}
