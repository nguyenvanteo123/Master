import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render child");
    return <div>Child number: {this.props.number.index}</div>;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    //Life cycle chạy trước khi component mất khỏi giao diện
    console.log("componentWillUnmount");
  }
}
