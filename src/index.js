import React from "react";
import ReactDOM from "react-dom";

import { SeasonDisplay } from "./seasonDisplay";
import { Spinner } from "./loader";

class App extends React.Component {
  state = { latitude: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderBody() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay lat={this.state.latitude} />;
    } else {
      return <Spinner message={"Please accept location request"} />;
    }
  }

  render() {
    return <div className={"border red"}>{this.renderBody()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
