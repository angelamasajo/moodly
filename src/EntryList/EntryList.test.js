import React from "react";
import ReactDOM from "react-dom";
import EntryList from "./EntryList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EntryList allEntries={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
