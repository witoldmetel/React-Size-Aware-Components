import React, { Component } from "react";
import { Card, Button } from "antd";
import faker from "faker";

import { AppContent } from "../AppContent";

export class Demo1 extends Component {
  state = {
    size: {},
    isSizeChange: false,
    cardData: this.fakeData
  };

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

  get fakeData() {
    return faker.lorem.paragraphs(Math.random() * 10);
  }

  getSize = size => {
    this.setState({ size });
  };

  onResize = () => {
    this.setState({ isSizeChange: true, cardData: this.fakeData });
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
      <div className="content">
        <div className="card-size">
          <strong>getBoundingClientRect()</strong>
          <p>Size:</p>
          <pre>{JSON.stringify(this.state.size, null, 2)}</pre>
        </div>
        <div className="first demo-card" ref={this.refCallback}>
          <Card title="Resize Me!" extra={this.resizeButton}>
            <p>{this.state.cardData}</p>
          </Card>
        </div>
      </div>
    );
  }

  render() {
    return (
      <AppContent
        title="Measure React component size with ref callbacks"
        content={this.content}
      />
    );
  }
}
