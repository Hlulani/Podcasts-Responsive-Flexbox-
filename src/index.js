import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainLayout from "./MainLayout-Inline/MainLayout";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<MainLayout />, document.getElementById("root"));
registerServiceWorker();
