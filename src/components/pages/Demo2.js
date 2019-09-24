import React, { Component } from "react";

import { AppContent } from "../AppContent";

export class Demo2 extends Component {
  get content() {
    return <p>Test 2</p>;
  }

  render() {
    return <AppContent title="Demo 2" content={this.content} />;
  }
}
