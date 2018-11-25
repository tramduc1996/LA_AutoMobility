import React from "react";

class Input extends React.Component {
  render() {
    console.log("Input...props", this.props);
    return (
      <div>
        <input type="textbox" />
        <button onClick={this.props.foo()}>Click me</button>
      </div>
    );
  }
}

export default Input;
