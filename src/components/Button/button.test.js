import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  test("it has correct initial color set to red", () => {
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: red`);
  });

  test("it has correct initial text 'change to blue'", () => {
    const buttonText = /change to blue/i;
    render(<Button />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(buttonText);
  });

  test("it turns blue when clicked", () => {
    const buttonText = /change to blue/i;
    const buttonTextAfterClick = /change to red/i;
    render(<Button />);
    const button = screen.getByRole("button", { name: buttonText });
    userEvent.click(button);
    expect(button).toHaveStyle(`background-color: blue`);
    expect(button).toHaveTextContent(buttonTextAfterClick);
  });
});
