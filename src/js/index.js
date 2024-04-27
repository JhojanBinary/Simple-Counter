import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.js";

let seconds = 0;

setInterval(() => {
    ReactDOM.render(<SecondsCounter seconds={seconds} />, document.querySelector("#app"));
    seconds++;
}, 1000);
