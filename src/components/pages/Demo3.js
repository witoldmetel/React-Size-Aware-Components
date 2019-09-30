import React, { Component } from "react";
import { Card } from "antd";
import { SizeMe } from "react-sizeme";

import { AppContent } from "../AppContent";

export class Demo3 extends Component {
  get fakeData() {
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    );
  }

  get content() {
    return (
      <SizeMe
        monitorHeight
        monitorWidth
        refreshRate={32}
        render={({ size }) => (
          <div className="content">
            <div className="card-size">
              <p>Size: </p>
              <pre>{JSON.stringify(size, null, 2)}</pre>
            </div>
            <div className="second demo-card">
              <Card title="Resize Me!">{this.fakeData}</Card>
            </div>
          </div>
        )}
      />
    );
  }

  render() {
    return (
      <AppContent
        title="A React component has to know the size of its container"
        content={this.content}
      />
    );
  }
}
