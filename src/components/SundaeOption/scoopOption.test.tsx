import { render, screen } from "@testing-library/react";
import { ScoopOption } from "./ScoopOption";

describe("Scoop Option", () => {
  test("it displays an image for each scoop option from server", () => {
    render(<ScoopOption name="as" imagePath="" />);
  });
});
