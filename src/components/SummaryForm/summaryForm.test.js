import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SummaryForm } from "./SummaryForm";

describe("Summary Form", () => {
  test("Checkbox render with correct label", () => {
    const checkboxLabelText = /I agree to/i;
    render(<SummaryForm />);
    const checkboxLabel = screen.getByLabelText(checkboxLabelText);

    expect(checkboxLabel).toBeInTheDocument();
  });

  test("Button becomes enabled after clicking the checkbox and becomes disabled after another click", () => {
    //Arrange the initial state
    render(<SummaryForm />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    //Act on the checkbox
    userEvent.click(checkbox);

    //Assert final state
    expect(button).toBeEnabled();
    expect(checkbox).toBeChecked();

    //Act on the checkbox
    userEvent.click(checkbox);

    //Assert final state
    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();
  });

  test("Button change to gray background color when disable", () => {
    render(<SummaryForm />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle(`background-color: gray`);
  });

  test("popover responds to hover", () => {
    render(<SummaryForm />);
    const popoverText = /no ice cream will actually be delivered/i;
    //popover starts out hidden
    const nullPopover = screen.queryByText(popoverText);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears when hover on checbox label
    const termsAndConditions = screen.getByLabelText(/terms and conditions/i);
    userEvent.hover(termsAndConditions);
    const popover = screen.getByTestId("terms");
    expect(popover).toBeInTheDocument();

    //dissapear when unhover
    userEvent.unhover(termsAndConditions);
    expect(nullPopover).not.toBeInTheDocument();
  });
});
