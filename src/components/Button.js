import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends Component {
  static contextType = LanguageContext;
  render() {
    return (
      <button className="ui button primary">
        {this.context === "english" ? "Submit" : "Senden"}
      </button>
    );
  }
}

export default Button;
