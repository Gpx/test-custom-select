import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import MySelector from "./MySelector";

afterEach(cleanup);

test("Naive test that doesn't work", () => {
  const { getByText } = render(<MySelector />);
  expect(getByText("Your favorite color is Red")).toBeInTheDocument();
  fireEvent.click(getByText("Red"));
  fireEvent.click(getByText("Green"));
  expect(getByText("Your favorite color is Green")).toBeInTheDocument();
});
