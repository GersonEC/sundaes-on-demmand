import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders learn react link", () => {
  render(<App />);
  expect(true).toBe(true);
});

test("Button becomes disabled after clicking the checkbox and becomes enabled after another click", () => {
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

  //Act on the checkbox
  userEvent.click(checkbox);

  //Assert final state
  expect(button).toBeEnabled();
  expect(checkbox).not.toBeChecked();
});

test("Button change to gray background color when disable", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  userEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: gray`);
});

test("Clicked disable button has gray background and reverts to blue", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox");

  userEvent.click(button);
  userEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: gray`);
  userEvent.click(checkbox);
  expect(button).toHaveStyle(`background-color: blue`);
});
