import React from "react";
import ReactDOM from "react-dom";
import App2 from "./component/App2"
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
<App2/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
