import React from "react";
import ReactDOM from "react-dom";
import App1 from"app1/App1"
import App2 from "app2/App2";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary";
// const App1 = React.lazy(() => import("app1/App1"));
const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);
const App = () => (
  <div style={{ display: 'flex' }}>
  <div style={{ flex: 1, padding: '20px', backgroundColor: '#f2f2f2' }}>
  {/* <RemoteWrapper> */}
    <App1/>
    {/* </RemoteWrapper> */}
  </div>
  <div style={{ flex: 1, padding: '20px', backgroundColor: '#f2f2f2' }}>
   <App2/>
  </div>
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
