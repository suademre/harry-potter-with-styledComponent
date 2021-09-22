import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
/* import harryPotterData from "./data.json"; */
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App /* harryPotterData={harryPotterData} */ />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
