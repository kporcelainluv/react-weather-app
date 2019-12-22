import React from "react";
import ReactDOM from "react-dom";

import { SeasonDisplay } from "./seasonDisplay";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    err => console.log(err)
  );
  return (
    <div>
      Hello!
      <SeasonDisplay />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
