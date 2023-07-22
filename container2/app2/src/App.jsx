import React from "react";
import ReactDOM from "react-dom";
import App2 from "./component/App2"
import "./index.css";

const App = () => (
  <div className="container">
<App2/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
