/* <div id= "Parent">
    <div>
        <h1>This h1 tag</h1>
    </div>
</div> */

const heading = React.createElement("div", { id: "Parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
  React.createElement("div", { id: "Child2" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
