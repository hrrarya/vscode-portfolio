import React, { Component } from "react";
import Typed from "typed.js";

const words = [
  "JavaScript,PHP Consultant",
  "Full-Stack Developer",
  "Open Source Contributor",
  "Linux Enthusiast",
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
          className="text-3xl sm:text-sm"
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
