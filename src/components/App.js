import React, { Component } from "react";
import CreateUser from "./CreateUser";

class App extends Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select language:{" "}
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag de"
            onClick={() => this.onLanguageChange("german")}
          />
        </div>
      </div>
    );
  }
}

export default App;
