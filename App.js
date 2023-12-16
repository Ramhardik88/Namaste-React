import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("div", { id: "heading" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello from H1 React"),
    React.createElement("h2", {}, "Hello from H2 React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello from H1 React"),
    React.createElement("h2", {}, "Hello from H2 React"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
