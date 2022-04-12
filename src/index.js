import React from "react";
import ReactDOM from "react-dom";
import { relative } from "./helper.js";

console.log("Bare module resolution", React);
relative();

ReactDOM.render(React.createElement("span", null, "Mounted"), document.getElementById("root"));
