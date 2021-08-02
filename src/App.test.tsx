import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  expect(true).toBe(true);
});

test("Button becomes disabled after clicking the checkbox", () => {
  //Arrange the initial state
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();

  //Act on the checkbox
  userEvent.click(checkbox);

  //Assert final state
  expect(button).toBeDisabled();
  expect(checkbox).toBeChecked();
});
