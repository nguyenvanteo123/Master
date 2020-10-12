import React, { Component } from "react";
import CLassProps from "./CLassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  state = {
    ten: "Tèo",
    lop: 51,
  };
  render() {
    return (
      <div>
        <h2>DemoProps</h2>
        <FunctionProps
          //Cách truyền props trong reactjs
          hoVaTen={this.state.ten}
          lop={this.state.lop}
        />
        <CLassProps hoVaTen={this.state.ten} lop={this.state.lop} />
      </div>
    );
  }
}
