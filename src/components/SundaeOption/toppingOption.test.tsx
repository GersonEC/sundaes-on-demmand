import { render, screen } from "@testing-library/react";
import { ToppingOption } from "./ToppingOption";
import { toppingOptions } from "../../utils/stubs";

describe("Scoop Option", () => {
  test("it displays an image for topping option", () => {
    render(
      <ToppingOption
        name={toppingOptions[0].name}
        imagePath={toppingOptions[0].imagePath}
      />
    );
    const toppingImage = screen.getByRole("img");
    expect(toppingImage).toBeInTheDocument();
  });
});
