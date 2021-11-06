import React, { Component } from "react";
import Typed from "typed.js";

const words = [
  "Javascript Consultant",
  "Backend Developer",
  "Open source contributor",
];

class TypedComp extends Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return (
      <>
        <span
          className="text-3xl"
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}

export default TypedComp;
