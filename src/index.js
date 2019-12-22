import React from "react";
import ReactDOM from "react-dom";

// import { SeasonDisplay } from "./seasonDisplay";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return (
//     <div>
//       Hello!
//       <SeasonDisplay />
//     </div>
//   );
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log("my component was updated!");
  // }

  render() {
    console.log("rendered");
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    } else if (!this.state.errorMessage && this.state.latitude) {
      return <div>Latitude: {this.state.latitude} </div>;
    } else {
      return <div>Loading... </div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
