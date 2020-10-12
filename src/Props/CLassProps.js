import React, { Component } from "react";

export default class CLassProps extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>CLassProps</h2>
        <p>Tên : {this.props.hoVaTen}</p>
        <p>Lớp : {this.props.lop}</p>
      </div>
    );
  }
}
