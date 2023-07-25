import React from "react";
import ReactDOM from "react-dom";
import App1 from "app1/App1"
import App2 from "app2/App2";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <App2/>
    <App1/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
