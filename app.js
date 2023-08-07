// Creating 2 children and heading siblings
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h1", {}, "I'm an h1 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h1", {}, "I'm an h1 tag"),
  ]),
]);

// createElement takes 3 arguments:- tagName, attributes, Children
const heading = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hello World from React!"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// render method will convert createElement object to HTML and render it on DOM.
root.render(parent);
