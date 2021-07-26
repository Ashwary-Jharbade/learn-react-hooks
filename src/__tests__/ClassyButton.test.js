import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ClassyButton from "../components/ClassyButton"

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

it("renders with or without a text prop", () => {
 
  // ClassyButton Component Rendering testing
  act(() => {
    render(<ClassyButton text={"Classy Button"} width={"210px"} />, container);
  });
  expect(container.textContent).toBe("Classy Button");

});