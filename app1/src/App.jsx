import React, { useState }  from "react";
import ReactDOM from "react-dom";
import Payeeform from "./component/Form"

import "./index.scss";

const App = () => {

  return(
    <div className="mt-10 text-3xl mx-auto max-w-6xl">

<Payeeform/>
</div>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));
