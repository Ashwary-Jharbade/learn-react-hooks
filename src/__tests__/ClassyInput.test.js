
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ClassyInput from "../components/ClassyInput"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes value on change", () => {
  act(() => {
    render(<ClassyInput value={"hello"} type={"text"} name={"button"} placeholder={"Enter"} />, container);
  });

  // get a hold of the button element, and trigger some clicks on it
  const button = document.querySelector("[data-testid=classy_input]");
  button.value = "Raddit"
  expect(button.value).toBe("Raddit");

});