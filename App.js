const heading = React.createElement(
  "h1",
  { id: "title1" },
  "Namaste Everyone From React"
);

const heading2 = React.createElement(
  "h1",
  { id: "title2" },
  "Namaste Everyone From React 2"
);

const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
