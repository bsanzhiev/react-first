/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import WrappedApp from "./App";
//import App from "./App";
//import { render } from "@testing-library/react";
//import { iterator } from "core-js/fn/symbol";

/* test("renders learn react link", () => {
  const { getByText } = render(<WrappedApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WrappedApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
