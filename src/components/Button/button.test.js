import { render } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  test("it has correct initial color", () => {
    render(<Button />);
  });
});
