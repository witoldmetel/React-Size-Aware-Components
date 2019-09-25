import React, { Component } from "react";
import { Card } from "antd";
import faker from "faker";

import { AppContent } from "../AppContent";

export class Demo2 extends Component {
  state = {
    size: {},
    cardData: this.fakeData
  };

  refCallback = element => {
    if (element) {
      this.elementRef = element;
    }
  };

  componentDidMount() {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => {
        this.getSize(entry.contentRect);
      });
    });

    observer.observe(this.elementRef);
  }

  get fakeData() {
    return faker.lorem.paragraphs(Math.random() * 5);
  }

  getSize = size => {
    this.setState({ size });
  };

  get content() {
    return (
      <div className="content">
        <div className="card-size">
          <strong>contentRect</strong>
          <p>Size: </p>
          <pre>{JSON.stringify(this.state.size, null, 2)}</pre>
        </div>
        <div className="second demo-card" ref={this.refCallback}>
          <Card title="Resize Me!">
            <p>{this.state.cardData}</p>
          </Card>
        </div>
      </div>
    );
  }

  render() {
    return <AppContent title="Resize Observer" content={this.content} />;
  }
}
