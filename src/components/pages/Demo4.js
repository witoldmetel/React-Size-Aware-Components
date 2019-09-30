import React, { Component } from "react";
import { Card } from "antd";
import Measure from "react-measure";

import { AppContent } from "../AppContent";

export class Demo4 extends Component {
  state = {
    size: {}
  };

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
      <Measure
        bounds
        onResize={contentRect => {
          this.setState({
            size: contentRect.bounds
          });
        }}
      >
        {({ measureRef }) => (
          <div className="content" ref={measureRef}>
            <div className="card-size">
              <p>Size: </p>
              <pre>{JSON.stringify(this.state.size, null, 2)}</pre>
            </div>
            <div className="second demo-card">
              <Card title="Resize Me!">{this.fakeData}</Card>
            </div>
          </div>
        )}
      </Measure>
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
