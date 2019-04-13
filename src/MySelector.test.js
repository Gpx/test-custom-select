import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import MySelector from "./MySelector";

jest.mock("react-select", () => ({ options, value, onChange }) => {
  function handleChange(event) {
    const option = options.find(
      option => option.value === event.currentTarget.value
    );
    onChange(option);
  }

  return (
    <select data-testid="custom-select" value={value} onChange={handleChange}>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
});

afterEach(cleanup);

test("Test with mock", () => {
  const { getByText, getByTestId } = render(<MySelector />);
  expect(getByText("Your favorite color is Red")).toBeInTheDocument();
  fireEvent.change(getByTestId("custom-select"), {
    target: { value: "green" }
  });
  expect(getByText("Your favorite color is Green")).toBeInTheDocument();
});
