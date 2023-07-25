import React from "react";
import ReactDOM from "react-dom";
import App1 from "./component/App1"
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <App1/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
