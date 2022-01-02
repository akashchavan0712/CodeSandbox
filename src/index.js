import React from "react";
import ReactDOM from "react-dom";

const Name = "Akash";
var Year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>Created By {Name}</p>
    <p>Copyright {Year}</p>
  </div>,
  document.getElementById("root")
);
