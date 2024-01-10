import React, { Component } from "react";
class like extends Component {
  handleClick = () => {};
  render() {
    let classes = "fa fa-heart";
    if (!this.props.Liked) {
      classes += "-o";
    }
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
        className={classes}
        aria-hidden="true"
      ></i>
    );
  }
}

export default like;
